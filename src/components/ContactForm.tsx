import { useState, type FormEvent } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const services = ['Портрет', 'Студия', 'Свадьба', 'Другое'];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      service: String(formData.get('service') || ''),
      message: String(formData.get('message') || ''),
    };

    if (!payload.name || !payload.email || !payload.service || !payload.message) {
      setStatus('error');
      setErrorMsg('Заполните обязательные поля.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase
      .from('contact_submissions')
      .insert(payload);

    if (error) {
      setStatus('error');
      setErrorMsg('Не удалось отправить. Попробуйте ещё раз.');
      return;
    }

    setStatus('success');
    form.reset();
  };

  return (
    <section id="contact" className="bg-neutral-900 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Связаться
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Забронируйте съёмку
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            Расскажите о вашей идее — отвечу в течение 24 часов и предложу удобное время.
          </p>
        </div>

        <div className="rounded-3xl bg-neutral-950/60 border border-white/10 p-8 md:p-12">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
              <CheckCircle2 className="w-16 h-16 text-amber-400 mb-6" />
              <h3 className="text-2xl font-bold text-white">Заявка отправлена!</h3>
              <p className="mt-3 text-neutral-400 max-w-md">
                Спасибо за обращение. Я свяжусь с вами в ближайшее время.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 px-6 py-2.5 rounded-full bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Отправить ещё одну
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Имя <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ваше имя"
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                    Телефон
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-300 mb-2">
                    Услуга <span className="text-amber-400">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-colors"
                  >
                    <option value="" disabled>Выберите услугу</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Сообщение <span className="text-amber-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Опишите вашу идею, желаемые даты и любые детали..."
                  className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-3 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3 animate-fade-in">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-semibold hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Отправить заявку
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
