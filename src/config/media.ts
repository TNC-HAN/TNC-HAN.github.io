/**
 * Zentrale Bildverwaltung. Fotos liegen in src/assets/photos/ (Herkunft: PHOTOS.md).
 * Alternativtexte (für Barrierefreiheit & SEO) stehen je Sprache in src/i18n/*.ts → photoAlt.
 * Bild austauschen: Datei mit gleichem Namen ersetzen. Neues Bild: hier ergänzen.
 */
import type { ImageMetadata } from 'astro';
import strategieMeeting from '@/assets/photos/strategie-meeting.jpg';
import coachingUnternehmer from '@/assets/photos/coaching-unternehmer.jpg';
import handschlagNachfolge from '@/assets/photos/handschlag-nachfolge.jpg';
import villaPoolModern from '@/assets/photos/villa-pool-modern.jpg';
import frankfurtSkyline from '@/assets/photos/frankfurt-skyline.jpg';
import istanbulBosporus from '@/assets/photos/istanbul-bosporus.jpg';
import mittelmeerKueste from '@/assets/photos/mittelmeer-kueste.jpg';
import vertragUnterschrift from '@/assets/photos/vertrag-unterschrift.jpg';
import rechenzentrum from '@/assets/photos/rechenzentrum.jpg';
import kiRoboter from '@/assets/photos/ki-roboter.jpg';
import planungWand from '@/assets/photos/planung-wand.jpg';
import unternehmerNachdenklich from '@/assets/photos/unternehmer-nachdenklich.jpg';
import herrenhaus from '@/assets/photos/herrenhaus.jpg';
import poolMediterran from '@/assets/photos/pool-mediterran.jpg';
import zypernKueste from '@/assets/photos/zypern-kueste.jpg';
import schluesseluebergabe from '@/assets/photos/schluesseluebergabe.jpg';
import programmcode from '@/assets/photos/programmcode.jpg';
import datenanalyseLaptop from '@/assets/photos/datenanalyse-laptop.jpg';
import dachCollage from '@/assets/photos/dach-collage.jpg';
import istanbulNacht from '@/assets/photos/istanbul-bosporusbruecke-nacht.jpg';
import noyanlarPool from '@/assets/photos/noyanlar-ocean-life-pool.jpg';
import noyanlarOceanLife from '@/assets/photos/noyanlar-ocean-life.jpg';
import dubaiMarina from '@/assets/photos/dubai-marina-nacht.jpg';
import mittelmeerBucht from '@/assets/photos/mittelmeer-bucht.jpg';
import nzKyreniaHafen from '@/assets/photos/nordzypern-kyrenia-hafen-berge.jpg';
import nzPromenade from '@/assets/photos/nordzypern-strandpromenade.jpg';
import nzKyreniaBurg from '@/assets/photos/nordzypern-kyrenia-burg.jpg';
import nzStrand from '@/assets/photos/nordzypern-strand.jpg';
import nzHuegel from '@/assets/photos/nordzypern-huegel-meer.jpg';
import nzFamagusta from '@/assets/photos/nordzypern-famagusta.jpg';
import nzMeerblick from '@/assets/photos/nordzypern-kyrenia-meerblick.jpg';
import nzTuerkis from '@/assets/photos/nordzypern-tuerkis.jpg';

export const photos = {
  strategieMeeting,
  coachingUnternehmer,
  handschlagNachfolge,
  villaPoolModern,
  frankfurtSkyline,
  istanbulBosporus,
  mittelmeerKueste,
  vertragUnterschrift,
  rechenzentrum,
  kiRoboter,
  planungWand,
  unternehmerNachdenklich,
  herrenhaus,
  poolMediterran,
  zypernKueste,
  schluesseluebergabe,
  programmcode,
  datenanalyseLaptop,
  dachCollage,
  istanbulNacht,
  noyanlarPool,
  noyanlarOceanLife,
  dubaiMarina,
  mittelmeerBucht,
  nzKyreniaHafen,
  nzPromenade,
  nzKyreniaBurg,
  nzStrand,
  nzHuegel,
  nzFamagusta,
  nzMeerblick,
  nzTuerkis,
} satisfies Record<string, ImageMetadata>;

export type PhotoKey = keyof typeof photos;
