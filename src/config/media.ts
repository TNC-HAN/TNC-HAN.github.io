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
import nzKyreniaBaum from '@/assets/photos/nordzypern-kyrenia-hafen-baum.jpg';
import dachDeAltbauvilla from '@/assets/photos/dach-de-altbauvilla.jpg';
import dachDeMuenchen from '@/assets/photos/dach-de-muenchen-altbau.jpg';
import dachDeHamburg from '@/assets/photos/dach-de-hamburg-wohnturm.jpg';
import dachAtWien from '@/assets/photos/dach-at-wien-altbau.jpg';
import dachAtAlpenvilla from '@/assets/photos/dach-at-alpenvilla.jpg';
import dachAtVillaBerge from '@/assets/photos/dach-at-villa-berge.jpg';
import dachChZuerich from '@/assets/photos/dach-ch-zuerich-altbau.jpg';
import dachChModern from '@/assets/photos/dach-ch-modern.jpg';
import dachChVilla from '@/assets/photos/dach-ch-villa-alpen.jpg';
import nzMeerblick from '@/assets/photos/nordzypern-kyrenia-meerblick.jpg';
import nzTuerkis from '@/assets/photos/nordzypern-tuerkis.jpg';
import omVillaPool from '@/assets/photos/offmarket-villa-pool-modern.jpg';
import omAnwesen from '@/assets/photos/offmarket-anwesen-abend.jpg';
import omArchitektenhaus from '@/assets/photos/offmarket-architektenhaus-daemmerung.jpg';
import omPenthouseMeer from '@/assets/photos/offmarket-penthouse-meerblick.jpg';
import omHerrenhaus from '@/assets/photos/offmarket-herrenhaus-klassisch.jpg';
import omAltbau from '@/assets/photos/offmarket-altbau-fassade.jpg';
import omBuero from '@/assets/photos/offmarket-buerogebaeude-glas.jpg';
import omPenthouseNacht from '@/assets/photos/offmarket-penthouse-nacht.jpg';
import omWasserlage from '@/assets/photos/offmarket-villen-wasserlage.jpg';
import coachingEinzel from '@/assets/photos/coaching-uemit-einzelgespraech.jpg';
import coachingFuehrung from '@/assets/photos/coaching-fuehrungskraft.jpg';
import coachingReflexion from '@/assets/photos/coaching-reflexion.jpg';
import coachingAchtsamkeit from '@/assets/photos/coaching-achtsamkeit.jpg';
import coachingKompass from '@/assets/photos/coaching-kompass.jpg';
import consultingMeeting from '@/assets/photos/consulting-teammeeting.jpg';
import consultingWorkshop from '@/assets/photos/consulting-uemit-workshop.jpg';
import consultingSeminar from '@/assets/photos/consulting-uemit-seminar.jpg';
import consultingTeam from '@/assets/photos/consulting-teamarbeit.jpg';
import consultingWebinar from '@/assets/photos/consulting-webinar.jpg';
import trIstanbulNacht from '@/assets/photos/tr-istanbul-bosporus-nacht.jpg';
import trBodrumAbend from '@/assets/photos/tr-bodrum-sonnenuntergang.jpg';
import trAntalya from '@/assets/photos/tr-antalya-kaleici-hafen.jpg';
import trKaputas from '@/assets/photos/tr-kaputas-strand.jpg';
import trOeluedeniz from '@/assets/photos/tr-oeluedeniz-lagune.jpg';
import trOrtakoey from '@/assets/photos/tr-istanbul-ortakoey.jpg';
import trBodrumBucht from '@/assets/photos/tr-bodrum-bucht.jpg';
import ddHausLupe from '@/assets/photos/dd-haus-lupe.jpg';
import ddBauplan from '@/assets/photos/dd-bauplan-bleistift.jpg';
import ddArchitekt from '@/assets/photos/dd-architekt-plaene.jpg';
import ddBaustelle from '@/assets/photos/dd-baustelle-begehung.jpg';
import ddTechnik from '@/assets/photos/dd-technische-pruefung.jpg';
import ddFinanzen from '@/assets/photos/dd-finanzanalyse.jpg';
import ddDashboard from '@/assets/photos/dd-kennzahlen-dashboard.jpg';
import ddDokumente from '@/assets/photos/dd-dokumente-lupe.jpg';
import ddVertrag from '@/assets/photos/dd-vertrag-unterschrift.jpg';
import ddNotar from '@/assets/photos/dd-notar-siegel.jpg';

export const photos = {
  trIstanbulNacht,
  trBodrumAbend,
  trAntalya,
  trKaputas,
  trOeluedeniz,
  trOrtakoey,
  trBodrumBucht,
  ddHausLupe,
  ddBauplan,
  ddArchitekt,
  ddBaustelle,
  ddTechnik,
  ddFinanzen,
  ddDashboard,
  ddDokumente,
  ddVertrag,
  ddNotar,
  coachingEinzel,
  coachingFuehrung,
  coachingReflexion,
  coachingAchtsamkeit,
  coachingKompass,
  consultingMeeting,
  consultingWorkshop,
  consultingSeminar,
  consultingTeam,
  consultingWebinar,
  omVillaPool,
  omAnwesen,
  omArchitektenhaus,
  omPenthouseMeer,
  omHerrenhaus,
  omAltbau,
  omBuero,
  omPenthouseNacht,
  omWasserlage,
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
  nzKyreniaBaum,
  dachDeAltbauvilla,
  dachDeMuenchen,
  dachDeHamburg,
  dachAtWien,
  dachAtAlpenvilla,
  dachAtVillaBerge,
  dachChZuerich,
  dachChModern,
  dachChVilla,
  nzMeerblick,
  nzTuerkis,
} satisfies Record<string, ImageMetadata>;

export type PhotoKey = keyof typeof photos;
