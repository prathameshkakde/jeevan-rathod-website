import { motion } from 'framer-motion';

// 21st.dev component references (replace with direct imports if you install them):
// import { FloatingNavbar } from '@21st-dev/ui/navbar/floating';
// import { AnimatedCard } from '@21st-dev/ui/cards/animated';
// import { GlowButton } from '@21st-dev/ui/buttons/glow';

import doctorPortrait from './assets/doctor-profile.svg';
import doctorCasual from './assets/doctor-casual.svg';
import hospitalLogo from './assets/hospital-logo.svg';

const doctor = {
  fullName: 'Dr. Jeevan Shankar Rathod',
  lastName: 'Rathod',
  specialty: 'Homeopathic Physician | Critical Care & ICU Management',
  clinicName: 'Jagdamba Hospital',
  location: 'Near Krishna Medical, Tiwasa, Yavatmal, Maharashtra',
  phone: '+918788402116',
  displayPhone: '+91 8788402116',
  email: 'jivanrathod1518@gmail.com',
  registration: '68394 (Maharashtra Council of Homoeopathy)',
  experience: '3 years',
  languages: ['English (Professional)', 'Marathi (Native/Bilingual)', 'Hindi (Fluent)'],
  timings: {
    offline: 'Mon–Sat: 10:00 AM – 2:00 PM, 3:00 PM – 9:00 PM',
    online: '24 x 7'
  }
};

const services = [
  'ICU & Critical Care Management',
  'Emergency response for cardiac arrest, respiratory failure, and polytrauma',
  'Ventilator and hemodynamic monitoring interpretation',
  'Post-operative patient stabilization and care planning',
  'Maternal & child health consultation (CGO/CCH)',
  'Skin & venereal disease assessment (CSVD)',
  'Digital EMR/EHR charting and clinical documentation'
];

const education = [
  'Bachelor of Homeopathic Medicine and Surgery (BHMS), MUHS Nashik (Pune Campus)',
  'Certificate in Child Health (CCH)',
  'Certificate in Gynecology & Obstetrics (CGO)',
  'Certificate in Skin & Venereal Diseases (CSVD), Pune'
];

const testimonials = [
  'No testimonial found in resume – using neutral placeholder. “Doctor explained treatment clearly and gave enough time during consultation.”',
  'No testimonial found in resume – using neutral placeholder. “Clinic process was smooth and staff was supportive throughout.”'
];

const mapEmbed = 'https://maps.google.com/maps?q=Jagdamba%20Hospital%20Near%20Krishna%20Medical%20Tiwasa%20Yavatmal&t=&z=15&ie=UTF8&iwloc=&output=embed';
const mapsLandmark = 'https://maps.app.goo.gl/vX773nk8RbgwbBrx5';
const whatsappMessage = encodeURIComponent(
  "Hello Dr. Rathod, I'd like to book an appointment. My name is [Patient Name]. Preferred date: [DD/MM/YYYY]. Reason: [brief reason]."
);
const whatsappLink = `https://wa.me/${doctor.phone.replace('+', '')}?text=${whatsappMessage}`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

const sections = [
  ['about', 'About'],
  ['services', 'Services'],
  ['experience', 'Experience'],
  ['testimonials', 'Testimonials'],
  ['contact', 'Contact']
];

export default function App() {
  return (
    <div>
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-3">
            <img src={hospitalLogo} alt="Jagdamba Hospital logo" className="h-10 w-auto" />
            <p className="hidden font-semibold text-medical-700 sm:block">{doctor.clinicName}</p>
          </a>
          <ul className="hidden gap-5 text-sm font-medium text-slate-600 md:flex">
            {sections.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="transition hover:text-medical-600">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href={whatsappLink} className="rounded-full bg-medical-600 px-4 py-2 text-sm font-semibold text-white hover:bg-medical-700">
            Book Now
          </a>
        </div>
      </nav>

      <header className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-12 md:grid-cols-2 md:items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
          <img src={hospitalLogo} alt="Jagdamba Hospital" className="mb-5 h-14 w-auto rounded-lg border border-slate-200 bg-white p-2 shadow-sm" />
          <p className="mb-3 inline-block rounded-full bg-medical-100 px-3 py-1 text-xs font-semibold text-medical-700">Trusted Homeopathic & Critical Care Support</p>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">{doctor.fullName}</h1>
          <p className="mt-3 text-lg text-slate-600">{doctor.specialty}</p>
          <p className="mt-5 text-slate-600">Empathetic, evidence-based clinical care focused on emergency excellence and long-term patient wellbeing.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={whatsappLink} className="rounded-xl bg-medical-600 px-5 py-3 font-semibold text-white shadow-soft hover:bg-medical-700">Book Appointment via WhatsApp</a>
            <a href="#contact" className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:border-medical-600 hover:text-medical-700">Visit Clinic</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid gap-4">
          <img src={doctorPortrait} alt="Dr. Jeevan Shankar Rathod" className="h-[560px] w-full rounded-3xl object-cover object-center shadow-soft" />
          <img src={doctorCasual} alt="Dr. Rathod in clinic attire" className="h-[320px] w-full rounded-3xl object-cover object-top shadow-soft" />
        </motion.div>
      </header>

      <main className="space-y-20 pb-16">
        <Section id="about" title="About Doctor">
          <p className="text-slate-600">Dedicated and highly skilled Homeopathic Physician with specialized training in Critical Care and ICU Management. Proven in high-acuity patient handling, multidisciplinary coordination, and compassionate family counseling during critical windows.</p>
        </Section>

        <Section id="services" title="Services & Specializations">
          <ul className="grid gap-3 md:grid-cols-2">{services.map((s) => <li key={s} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">{s}</li>)}</ul>
        </Section>

        <Section id="experience" title="Experience & Education">
          <div className="grid gap-4 md:grid-cols-2">
            <Card title="Clinical Experience">
              <p>{doctor.experience} of clinical practice with focus on ICU, emergency procedures, diagnostics, and post-operative stabilization.</p>
            </Card>
            <Card title="Education & Certifications">
              <ul className="list-disc space-y-1 pl-5">{education.map((item) => <li key={item}>{item}</li>)}</ul>
            </Card>
          </div>
        </Section>

        <Section id="testimonials" title="Patient Testimonials">
          <div className="grid gap-4 md:grid-cols-2">{testimonials.map((t) => <blockquote key={t} className="rounded-2xl border border-slate-200 bg-white p-5 italic text-slate-600">“{t.replace('“', '').replace('”', '')}”</blockquote>)}</div>
        </Section>

        <Section id="contact" title="Contact & Clinic">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 rounded-2xl bg-white p-5 shadow-soft">
              <p><strong>Clinic:</strong> {doctor.clinicName}</p>
              <p><strong>Address:</strong> {doctor.location}</p>
              <p><strong>Phone:</strong> <a href={`tel:${doctor.phone}`} className="text-medical-700">{doctor.displayPhone}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${doctor.email}`} className="text-medical-700">{doctor.email}</a></p>
              <p><strong>Registration No:</strong> {doctor.registration}</p>
              <p><strong>Languages:</strong> {doctor.languages.join(', ')}</p>
              <p><strong>Offline Timings:</strong> {doctor.timings.offline}</p>
              <p><strong>Online Availability:</strong> {doctor.timings.online}</p>
              <a href={mapsLandmark} target="_blank" rel="noreferrer" className="inline-block text-sm font-semibold text-medical-700 underline">Open Landmark in Google Maps</a>
            </div>
            <iframe title="Jagdamba Hospital Map" src={mapEmbed} className="h-80 w-full rounded-2xl border-0 shadow-soft" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} {doctor.clinicName}. Website created by <span className="font-semibold text-medical-700">Wiserverse Credits</span>.
      </footer>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <motion.section id={id} className="mx-auto max-w-6xl px-4" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.45 }}>
      <h2 className="mb-5 text-2xl font-bold md:text-3xl">{title}</h2>
      {children}
    </motion.section>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-3 font-semibold text-medical-700">{title}</h3>
      <div className="text-slate-600">{children}</div>
    </div>
  );
}
