import { Sparkles, ShieldCheck, Sun, Droplet, Layers, Wrench, Activity, Smile, Zap, Users, Heart, MessageCircle } from 'lucide-react'

// All photos are remote Unsplash images (royalty-free). Swap any URL here to change an image site-wide.
const u = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
  hero: u('photo-1588776814546-1ffcf47267a5', 1400),
  about: u('photo-1629909613654-28e377c37b09', 1400),
  cta: u('photo-1606265752439-1f18664207b1', 1400),
  final: u('photo-1609840114035-3c981b782dfe', 1400),
}

export const NAV = [
  ['Home', '#home'], ['Services', '#services'], ['About', '#about'],
  ['Why Us', '#why'], ['Reviews', '#reviews'], ['FAQ', '#faq'],
]

export const BENEFITS = [
  { icon: Heart, title: 'Personalized Care', text: 'Dental treatment tailored to every patient’s needs.' },
  { icon: Zap, title: 'Modern Technology', text: 'Comfortable and efficient care using modern dental technology.' },
  { icon: Users, title: 'Experienced Professionals', text: 'A professional approach focused on quality and patient comfort.' },
  { icon: ShieldCheck, title: 'Complete Dental Care', text: 'From preventive checkups to cosmetic and restorative treatments.' },
]

export const SERVICES = [
  { icon: Sparkles, title: 'Dental Cleaning & Preventive Care', text: 'Routine cleanings, oral examinations, plaque removal, and preventive care.', img: u('photo-1606811841689-23dfddce3e95', 800), alt: 'Dental cleaning and oral examination' },
  { icon: ShieldCheck, title: 'General Dentistry', text: 'Comprehensive dental care for maintaining healthy teeth and gums.', img: u('photo-1598256989800-fe5f95da9787', 800), alt: 'Dentist examining a patient' },
  { icon: Sun, title: 'Teeth Whitening', text: 'Professional whitening options designed to brighten your smile.', img: u('photo-1570612861542-284f4c12e75f', 800), alt: 'Bright, healthy smile' },
  { icon: Droplet, title: 'Dental Fillings', text: 'Treatment for cavities and damaged teeth.', img: u('photo-1593022356769-11f221341d8c', 800), alt: 'Dental tools prepared for a filling' },
  { icon: Layers, title: 'Crowns & Bridges', text: 'Restorative solutions for damaged or missing teeth.', img: u('photo-1631217868264-e5b90bb7e133', 800), alt: 'Dental model showing restorative work' },
  { icon: Wrench, title: 'Dental Implants', text: 'Long-term tooth replacement solutions designed to restore function and appearance.', img: u('photo-1607613009820-a29f7bb81c04', 800), alt: 'Professional dental treatment in progress' },
  { icon: Activity, title: 'Root Canal Treatment', text: 'Treatment designed to save infected or severely damaged teeth.', img: u('photo-1612349317150-e413f6a5b16d', 800), alt: 'Dentist preparing for a procedure' },
  { icon: Smile, title: 'Cosmetic Dentistry', text: 'Smile-enhancing treatments focused on improving the appearance of teeth.', img: u('photo-1445527815219-ecbfec67492e', 800), alt: 'Smiling patient after cosmetic dental care' },
  { icon: Zap, title: 'Emergency Dental Care', text: 'Prompt evaluation and treatment for urgent dental concerns.', img: u('photo-1581594693702-fbdc51b2763b', 800), alt: 'Dentist consulting with a patient' },
  { icon: Users, title: 'Pediatric Dentistry', text: 'Gentle dental care designed for children and growing smiles.', img: u('photo-1559757148-5c350d0d3c56', 800), alt: 'Child receiving friendly dental care' },
]

export const WHY = [
  { icon: Smile, title: 'Comfort First', text: 'A welcoming experience designed to reduce dental anxiety.' },
  { icon: Heart, title: 'Personalized Treatment', text: 'Care recommendations based on individual needs.' },
  { icon: Zap, title: 'Modern Approach', text: 'Contemporary techniques and technology.' },
  { icon: MessageCircle, title: 'Clear Communication', text: 'Straightforward explanations so patients understand their treatment options.' },
]

export const REVIEWS = [
  { name: 'Sarah M.', text: 'From booking to treatment, the entire experience felt comfortable and professional.' },
  { name: 'Michael R.', text: 'The team explained every option clearly, and I never felt rushed.' },
  { name: 'Emily T.', text: 'A calm, welcoming visit. I left feeling confident about my next steps.' },
]

export const FAQS = [
  ['How often should I visit the dentist?', 'Many dental professionals suggest a checkup about every six months, though the right schedule depends on your oral health and personal needs. Your dentist can recommend what suits you.'],
  ['How often should I get a dental cleaning?', 'Regular professional cleanings are commonly recommended once or twice a year. Your dental team can advise on a schedule based on your individual needs.'],
  ['Is teeth whitening safe?', 'Professionally supervised whitening is generally considered a safe option for many people. A dental professional can assess your teeth and gums first and discuss what is appropriate for you.'],
  ['What should I do if I have a dental emergency?', 'Contact a dental professional as soon as possible and describe your symptoms. If you are experiencing severe pain, swelling, or injury, seek urgent care promptly.'],
  ['How long does a dental cleaning take?', 'Appointment length varies by patient. A routine cleaning and exam is often completed within an hour, but your team can give you a better idea when you book.'],
  ['Do you treat children?', 'Yes. We offer gentle dental care designed for children and growing smiles.'],
  ['What happens during a first dental visit?', 'Typically your dental team reviews your health history, performs an examination and cleaning if appropriate, and discusses any concerns and a care plan with you.'],
  ['Do you offer cosmetic dental treatments?', 'Yes. We offer smile-enhancing options, and a dental professional can talk through what may suit your goals.'],
]
