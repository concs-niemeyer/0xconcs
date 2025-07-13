import {
  Github,
  VenetianMask
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/concs-niemeyer",
  },
  {
    name: "Discord: concs_",
    icon: VenetianMask,
  }
];

export default function PremiumContacts() {
  return (
    <section id="contact" className="py-8 bg-black relative z-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-green-600">Socials Networks</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">
            Let's connect
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-12">
          {socialLinks.map(({ name, icon: Icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 dark:text-white hover:text-indigo-600 transition-colors"
            >
              <Icon className="h-8 w-8" />
              <span className="text-sm font-medium">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
