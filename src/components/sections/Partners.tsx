import { Pause, Play } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { partners } from "../../data/site";
import Container from "../ui/Container";
import Section from "../ui/Section";
import "./Partners.css";

const tileClassName =
  "flex min-h-24 items-center justify-center rounded-[22px] border bg-slate-50 px-3 py-4 lg:min-h-32";

const isPreview = import.meta.env.DEV && partners.length === 0;
const logos = isPreview ? Array.from({ length: 10 }, () => null) : partners;
const repetitions = Math.ceil(5 / Math.max(1, logos.length));
const sequence = Array.from({ length: repetitions }, () => logos).flat();
const trackStyle = {
  "--partners-duration": `${sequence.length * 5}s`,
} as CSSProperties;

export default function Partners() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <Section id="marcas" className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-(--color-primary)">
            Nossas parcerias
          </span>
          <h2 className="mt-3 text-[36px] font-bold leading-tight text-slate-900">
            Marcas e parceiros
          </h2>
          <p className="mt-5 text-[16px] leading-8 text-slate-600">
            Conheça as marcas parceiras da Bello Comercial.
          </p>
        </div>

        {isPreview && (
          <p className="sr-only">Prévia com espaços reservados para os logotipos oficiais.</p>
        )}

        <div className="mx-auto mt-10 max-w-6xl">
          <div className="partners-marquee" aria-hidden={isPreview || undefined}>
            <div className="partners-marquee__track" data-paused={isPaused} style={trackStyle}>
              {[false, true].map((isCopy) => (
                <ul
                  key={String(isCopy)}
                  role="list"
                  className="partners-marquee__sequence"
                  aria-hidden={isCopy || undefined}
                  data-copy={isCopy}
                >
                  {sequence.map((partner, index) => {
                    const isRepeat = index >= logos.length;

                    return (
                      <li
                        key={index}
                        aria-hidden={isRepeat || undefined}
                        data-copy={isRepeat}
                        className={`${tileClassName} ${partner
                          ? "border-slate-200"
                          : "border-dashed border-slate-300 text-center text-sm text-slate-600"
                        }`}
                      >
                        {partner ? (
                          <img
                            src={partner.logo}
                            alt={isCopy || isRepeat ? "" : partner.name}
                            loading="lazy"
                            className="h-14 w-full max-w-32 object-contain"
                          />
                        ) : (
                          "Espaço para logotipo"
                        )}
                      </li>
                    );
                  })}
                </ul>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-center motion-reduce:hidden">
            <button
              type="button"
              className="inline-flex size-11 cursor-pointer items-center justify-center rounded-lg text-slate-500 hover:bg-slate-50 hover:text-(--color-primary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary)"
              onClick={() => setIsPaused((paused) => !paused)}
            >
              {isPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
              <span className="sr-only">
                {isPaused ? "Retomar animação" : "Pausar animação"}
              </span>
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
