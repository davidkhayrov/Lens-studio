import { Award, Camera, Clock, Heart } from 'lucide-react';

const stats = [
  { icon: Camera, value: '500+', label: 'Съёмок проведено' },
  { icon: Heart, value: '120+', label: 'Свадеб отснято' },
  { icon: Award, value: '8', label: 'Наград и публикаций' },
  { icon: Clock, value: '12 лет', label: 'За объективом' },
];

export default function About() {
  return (
    <section id="about" className="bg-neutral-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.pexels.com/photos/36697251/pexels-photo-36697251.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                alt="Фотограф за работой в студии"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-amber-400 text-neutral-950 rounded-2xl p-6 shadow-xl">
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm font-medium">лет опыта</p>
            </div>
          </div>

          <div>
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Обо мне
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Привет, я Анна —
              <br />
              ваш фотограф
            </h2>
            <p className="mt-6 text-neutral-300 leading-relaxed">
              Я работаю с людьми, а не просто с камерой. Моя задача — поймать
              живые эмоции, настоящий смех и те мимолётные взгляды, которые
              невозможно повторить.
            </p>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              За 12 лет я отсняла более 500 проектов: от камерных студийных
              портретов до масштабных свадеб. Работаю с естественным и
              постановочным светом, люблю чёрно-белую эстетику и тёплые плёночные
              тона.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-400/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-sm text-neutral-400">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
