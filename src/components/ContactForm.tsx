"use client";

import { useId, useState, type FormEvent } from "react";
import type { Dict } from "@/content/dictionary";
import { IconWhatsApp } from "./Icons";

/**
 * A deliberately short form. It stores nothing: on submit it composes a
 * WhatsApp message the visitor reviews and sends themselves.
 */
export function ContactForm({ labels, whatsapp }: { labels: Dict["form"]; whatsapp: string }) {
  const id = useId();
  const [errors, setErrors] = useState<{ name?: boolean; message?: boolean }>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const phone = String(f.get("phone") ?? "").trim();
    const pref = String(f.get("pref") ?? "");
    const message = String(f.get("message") ?? "").trim();
    const next = { name: !name, message: !message };
    setErrors(next);
    if (next.name || next.message) {
      e.currentTarget.querySelector<HTMLElement>(next.name ? "[name=name]" : "[name=message]")?.focus();
      return;
    }
    const lines = [
      labels.greeting,
      "",
      message,
      "",
      `${labels.msgName}: ${name}`,
      phone ? `${labels.msgPhone}: ${phone}` : "",
      `${labels.msgPref}: ${pref === "call" ? labels.prefCall : labels.prefWhatsapp}`,
    ].filter((l, i, arr) => l !== "" || arr[i - 1] !== "");
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  }

  const field = "mt-2 block w-full rounded-[2px] border border-line-strong bg-paper px-4 py-3 text-[1.0625rem] text-ink placeholder:text-muted/70 focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2";
  const err = "border-[#9b2c2c]";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor={`${id}-name`} className="font-semibold text-ink">
          {labels.name}
        </label>
        <input id={`${id}-name`} name="name" autoComplete="name" className={`${field} ${errors.name ? err : ""}`} aria-invalid={errors.name || undefined} aria-describedby={errors.name ? `${id}-name-err` : undefined} />
        {errors.name && (
          <p id={`${id}-name-err`} className="mt-2 text-sm font-semibold text-[#9b2c2c]">
            {labels.required}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={`${id}-phone`} className="font-semibold text-ink">
          {labels.phone} <span className="font-normal text-muted">({labels.optional})</span>
        </label>
        <input id={`${id}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" className={field} aria-describedby={`${id}-phone-hint`} />
        <p id={`${id}-phone-hint`} className="mt-2 text-sm text-muted">
          {labels.phoneHint}
        </p>
      </div>

      <fieldset>
        <legend className="font-semibold text-ink">{labels.preference}</legend>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-6">
          {(["call", "whatsapp"] as const).map((v) => (
            <label key={v} className="flex min-h-11 cursor-pointer items-center gap-3">
              <input type="radio" name="pref" value={v} defaultChecked={v === "call"} className="size-5 accent-[var(--room-dark)]" />
              {v === "call" ? labels.prefCall : labels.prefWhatsapp}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor={`${id}-msg`} className="font-semibold text-ink">
          {labels.message}
        </label>
        <textarea
          id={`${id}-msg`}
          name="message"
          rows={4}
          className={`${field} resize-y ${errors.message ? err : ""}`}
          aria-invalid={errors.message || undefined}
          aria-describedby={`${id}-msg-hint${errors.message ? ` ${id}-msg-err` : ""}`}
        />
        <p id={`${id}-msg-hint`} className="mt-2 text-sm text-muted">
          {labels.messageHint}
        </p>
        {errors.message && (
          <p id={`${id}-msg-err`} className="mt-1 text-sm font-semibold text-[#9b2c2c]">
            {labels.required}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        <IconWhatsApp />
        {labels.submit}
      </button>
      <p className="text-sm text-muted">{labels.privacy}</p>
    </form>
  );
}
