import {
  Linkedin,
  Mail
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/conrado-niemeyer",
  },
  {
    name: "conrado.raizen@gmail.com",
    icon: Mail,
    url: "mailto:conrado.raizen@gmail.com",
  }
];

export default function StandardContacts() {
  return (
    <section id="contact" className="dark:bg-gray-900 py-8 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 dark:text-white">Redes Sociais</h2>
          <p className="mt-2 text-2xl font-bold tracking-tight dark:text-white ">
            Entre em contato
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-12">
          {socialLinks.map(({ name, icon: Icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-green-400 transition-colors"
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm font-medium">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
