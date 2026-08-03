import { Check } from 'lucide-react';

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Портрет',
    price: '5 000 ₽',
    description: 'Индивидуальная или парная портретная съёмка в студии.',
    features: [
      '1 час съёмки',
      '2 образа / локации',
      '30 готовых фото в ретуши',
      'Все исходники в подарок',
      'Онлайн-галерея на 30 дней',
    ],
  },
  {
    name: 'Студия',
    price: '12 000 ₽',
    description: 'Расширенная студийная сессия с постановочным светом.',
    features: [
      '3 часа съёмки',
      'До 4 образов',
      '80 готовых фото в ретуши',
      'Макияж и стилист по запросу',
      'Онлайн-галерея на 60 дней',
    ],
    featured: true,
  },
  {
    name: 'Свадьба',
    price: '35 000 ₽',
    description: 'Полный день свадебной съёмки от утра до вечера.',
    features: [
      'До 12 часов съёмки',
      '2 фотографа на площадке',
      '300+ готовых фото в ретуши',
      'Короткий клип-тизер',
      'Печать фотокниги в подарок',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-neutral-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Тарифы
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Цены и пакеты
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            Прозрачные пакеты без скрытых платежей. Выберите подходящий — или напишите для индивидуального расчёта.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                plan.featured
                  ? 'bg-gradient-to-b from-amber-400/10 to-neutral-900 border-2 border-amber-400/40 scale-[1.03] shadow-2xl shadow-amber-400/10'
                  : 'bg-neutral-950/60 border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-400 text-neutral-950 text-xs font-bold tracking-wide">
                  ПОПУЛЯРНЫЙ
                </span>
              )}

              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-4 text-3xl font-bold text-white">
                {plan.price}
              </p>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-neutral-300">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-400/15 flex items-center justify-center">
                      <Check className="w-3 h-3 text-amber-400" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  plan.featured
                    ? 'bg-amber-400 text-neutral-950 hover:bg-amber-300'
                    : 'bg-white/5 text-white border border-white/15 hover:bg-white/10'
                }`}
              >
                Выбрать пакет
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
