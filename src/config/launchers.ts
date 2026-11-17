/**
 * Programme für die Kontakt-Kacheln „Telefon“ und „E-Mail“.
 *
 * Technischer Hintergrund (wichtig für Entwickler):
 * Eine Website kann nicht auslesen, welche Programme installiert sind. Sie kann
 * nur Links mit einem „Protokoll“ öffnen (tel:, mailto:, sip:, msteams …). Das
 * Betriebssystem startet dann das Programm, das dafür registriert ist.
 * - Smartphone: tel:/mailto: öffnen direkt Telefon- bzw. Standard-Mail-App.
 * - Laptop/PC: Auswahlfenster mit den gängigsten Programmen; „Standard“ nutzt das
 *   im System eingestellte Programm (z. B. CRM-Dialer, Smartphone-Link, Outlook).
 * - Web-Postfächer ohne „Neue Mail“-Link: Postfach öffnen, Adresse wird kopiert.
 * Neue Programme: einfach einen Eintrag in den Listen unten ergänzen.
 */
import type { Dictionary } from '@/i18n';

export type LaunchMode = 'protocol' | 'web' | 'web-copy' | 'copy';

export interface LaunchOption {
  id: string;
  label: string;
  hint?: string;
  /** Ziel-Adresse; bei „copy“ der zu kopierende Text */
  url: string;
  mode: LaunchMode;
  /** Text, der bei „web-copy“/„copy“ in die Zwischenablage kommt */
  copy?: string;
}

export function phoneOptions(number: string, l: Dictionary['launcher']): LaunchOption[] {
  const n = number.replace(/[^\d+]/g, '');
  const enc = encodeURIComponent(n);
  return [
    {
      id: 'tel',
      label: l.defaultPhone,
      hint: l.defaultPhoneHint,
      url: `tel:${n}`,
      mode: 'protocol',
    },
    {
      id: 'teams',
      label: 'Microsoft Teams',
      url: `https://teams.microsoft.com/l/call/0/0?users=4:${enc}`,
      mode: 'web',
    },
    { id: 'zoom', label: 'Zoom Phone', url: `zoomphonecall://${enc}`, mode: 'protocol' },
    { id: 'webex', label: 'Webex', url: `webextel://${enc}`, mode: 'protocol' },
    { id: 'skype', label: 'Skype', url: `skype:${n}?call`, mode: 'protocol' },
    { id: 'sip', label: 'SIP-Softphone', hint: l.sipHint, url: `sip:${n}`, mode: 'protocol' },
    {
      id: 'callto',
      label: 'Callto-Dialer',
      hint: l.calltoHint,
      url: `callto:${n}`,
      mode: 'protocol',
    },
    {
      id: 'facetime',
      label: 'FaceTime Audio',
      hint: l.macOnly,
      url: `facetime-audio:${n}`,
      mode: 'protocol',
    },
    {
      id: 'gvoice',
      label: 'Google Voice',
      hint: l.browserHint,
      url: `https://voice.google.com/u/0/calls?a=nc,${enc}`,
      mode: 'web',
    },
    { id: 'copy', label: l.copyNumber, url: '', copy: number, mode: 'copy' },
  ];
}

export function emailOptions(address: string, l: Dictionary['launcher']): LaunchOption[] {
  const to = encodeURIComponent(address);
  const su = encodeURIComponent(l.emailSubject);
  return [
    {
      id: 'mailto',
      label: l.defaultEmail,
      hint: l.defaultEmailHint,
      url: `mailto:${address}?subject=${su}`,
      mode: 'protocol',
    },
    {
      id: 'gmail',
      label: 'Gmail',
      hint: l.browserHint,
      url: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}`,
      mode: 'web',
    },
    {
      id: 'outlookcom',
      label: 'Outlook.com',
      hint: l.browserHint,
      url: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}`,
      mode: 'web',
    },
    {
      id: 'outlook365',
      label: 'Microsoft 365 (Outlook Web)',
      hint: l.browserHint,
      url: `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${su}`,
      mode: 'web',
    },
    {
      id: 'yahoo',
      label: 'Yahoo Mail',
      hint: l.browserHint,
      url: `https://compose.mail.yahoo.com/?to=${to}&subject=${su}`,
      mode: 'web',
    },
    {
      id: 'gmx',
      label: 'GMX',
      hint: l.copyHint,
      url: 'https://www.gmx.net/',
      copy: address,
      mode: 'web-copy',
    },
    {
      id: 'webde',
      label: 'WEB.DE',
      hint: l.copyHint,
      url: 'https://web.de/',
      copy: address,
      mode: 'web-copy',
    },
    {
      id: 'icloud',
      label: 'iCloud Mail',
      hint: l.copyHint,
      url: 'https://www.icloud.com/mail',
      copy: address,
      mode: 'web-copy',
    },
    {
      id: 'proton',
      label: 'Proton Mail',
      hint: l.copyHint,
      url: 'https://mail.proton.me/',
      copy: address,
      mode: 'web-copy',
    },
    {
      id: 'zoho',
      label: 'Zoho Mail',
      hint: l.copyHint,
      url: 'https://mail.zoho.com/',
      copy: address,
      mode: 'web-copy',
    },
    { id: 'copy', label: l.copyAddress, url: '', copy: address, mode: 'copy' },
  ];
}
