"""Excel-Fassung des KI-Potenzialchecks erzeugen (de/en/tr).

Aufruf: python make_xlsx.py <fragen.json> <ausgabe.xlsx> [de|en|tr]
fragen.json = {"PART1": [...], "PART2": [...]} aus lang-<sprache>.js (siehe ANLEITUNG.md, Abschnitt 7).
"""
import json, sys
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.worksheet.datavalidation import DataValidation

src, out = sys.argv[1], sys.argv[2]
LANG = sys.argv[3] if len(sys.argv) > 3 else 'de'
d = json.load(open(src, encoding='utf-8'))

T = {
 'de': dict(
  title='KI-Potenzialcheck · NEXXCON-24', sub='Fragebogen zum Ausfüllen in Ihrem eigenen Tempo',
  intro=['Mit diesem Fragebogen erfassen wir Ihre heutige Situation: Abläufe, Software, Daten und Ziele. Daraus bereiten wir Ihre persönliche KI-Potenzialanalyse vor – mit konkreten Ansatzpunkten, wo Automatisierung bei Ihnen Zeit und Geld spart.',
         'Schneller geht es online, dort können Sie auch per Sprachnachricht oder Video antworten: https://tnc-han.github.io/ki-check/'],
  how='So füllen Sie aus',
  steps=[('1. Blatt „{s1}“', '25 Fragen zur Ist-Situation. Setzen Sie in der gelben Spalte „{pick}“ ein x neben die passende Antwort.'),
         ('Einfach- oder Mehrfachauswahl', 'Steht bei der Frage „{one}“, bitte genau ein x. Bei „{multi}“ beliebig viele.'),
         ('Sonstiges', 'Passt keine Antwort, schreiben Sie Ihre Antwort frei in die gelbe Zeile „Sonstiges“.'),
         ('2. Blatt „{s2}“', '20 Fragen zu Ihren Geschäftsbereichen. Als Dankeschön erhalten Sie mit unserer Auswertung einen Code über 10 % Rabatt auf unsere Leistungen.'),
         ('3. Blatt „{s3}“', 'Ihre Kontaktdaten und die Einwilligung zur Datenverarbeitung.'),
         ('Beispiel', 'Frage „Wie viele Mitarbeitende?“ → x neben „21–50“. Fertig.')],
  prog='Ihr Fortschritt', prog1='Beantwortet im Fragebogen', prog2='Beantwortet in der Vertiefung', of='von', qs='Fragen',
  ret='Zurücksenden',
  retRows=[('Per E-Mail an', 'nexxcon24@gmail.com'), ('Betreff', 'KI-Potenzialcheck – <Ihr Unternehmen>'),
           ('Anlagen', 'Gerne weitere Unterlagen mitschicken (z. B. Prozessbeschreibungen, Organigramm, Beispiel-Dokumente).'),
           ('Fragen?', 'Telefon +49 171 1819905')],
  thanks='Vielen Dank! Wir analysieren Ihre Antworten sorgfältig und freuen uns darauf, Sie bald persönlich kennenzulernen.',
  s1='Fragebogen', s2='Vertiefung (optional)', s3='Kontakt',
  hdr=['Nr.', 'Bereich', 'Frage / Antwort', 'Auswahl', 'Ihre Wahl'], pick='Ihre Wahl',
  one='Eine Antwort', multi='Mehrfachauswahl', other='Sonstiges (bitte frei ergänzen):', onlyx='Bitte nur ein x eintragen.',
  cH='Ihre Kontaktdaten',
  fields=['Name *', 'Unternehmen *', 'E-Mail *', 'Telefon', 'Website', 'Erstgespräch gewünscht? (ja/nein)', 'Bevorzugte Zeiten für einen Rückruf'],
  yesno='"ja,nein"', consentL='Einwilligung *',
  consent='Ich bin einverstanden, dass NEXXCON-24 meine Angaben zur Vorbereitung der KI-Potenzialanalyse und zur Kontaktaufnahme verarbeitet. Details: https://tnc-han.github.io/datenschutz/  Die Einwilligung kann ich jederzeit widerrufen.',
  agree='Zustimmung (x eintragen)', req='* Pflichtangaben', send='Bitte senden Sie die ausgefüllte Datei an nexxcon24@gmail.com.',
  prop='KI-Potenzialcheck NEXXCON-24'),
 'en': dict(
  title='AI Potential Check · NEXXCON-24', sub='Questionnaire to fill in at your own pace',
  intro=['This questionnaire captures where your business stands today: processes, software, data and goals. From your answers we prepare your personal AI potential analysis, with concrete starting points where automation saves you time and money.',
         'It is quicker online, where you can also answer by voice message or video: https://tnc-han.github.io/ki-check/en/'],
  how='How to fill it in',
  steps=[('1. Sheet “{s1}”', '25 questions about your current situation. Put an x in the yellow “{pick}” column next to the matching answer.'),
         ('Single or multiple choice', 'If the question says “{one}”, please enter exactly one x. With “{multi}” as many as you like.'),
         ('Other', 'If no answer fits, write your own answer in the yellow “Other” row.'),
         ('2. Sheet “{s2}”', '20 questions about your business areas. As a thank-you you will receive a code for 10% off our services with our evaluation.'),
         ('3. Sheet “{s3}”', 'Your contact details and consent to data processing.'),
         ('Example', 'Question “How many employees?” → x next to “21–50”. Done.')],
  prog='Your progress', prog1='Answered in the questionnaire', prog2='Answered in the deep dive', of='of', qs='questions',
  ret='Sending it back',
  retRows=[('By email to', 'nexxcon24@gmail.com'), ('Subject', 'AI Potential Check – <your company>'),
           ('Attachments', 'Feel free to add further documents (e.g. process descriptions, org chart, sample documents).'),
           ('Questions?', 'Phone +49 171 1819905')],
  thanks='Thank you! We will analyse your answers carefully and look forward to meeting you in person soon.',
  s1='Questionnaire', s2='Deep dive (optional)', s3='Contact',
  hdr=['No.', 'Area', 'Question / answer', 'Type', 'Your choice'], pick='Your choice',
  one='One answer', multi='Multiple choice', other='Other (please add your own):', onlyx='Please enter only an x.',
  cH='Your contact details',
  fields=['Name *', 'Company *', 'Email *', 'Phone', 'Website', 'Initial call wanted? (yes/no)', 'Preferred times for a call back'],
  yesno='"yes,no"', consentL='Consent *',
  consent='I agree that NEXXCON-24 may process my details to prepare the AI potential analysis and to contact me. Details: https://tnc-han.github.io/en/privacy/  I can withdraw my consent at any time.',
  agree='Consent (enter x)', req='* Required', send='Please send the completed file to nexxcon24@gmail.com.',
  prop='AI Potential Check NEXXCON-24'),
 'tr': dict(
  title='Yapay Zekâ Potansiyel Testi · NEXXCON-24', sub='Kendi hızınızda doldurabileceğiniz anket',
  intro=['Bu anketle şirketinizin bugünkü durumunu öğreniyoruz: iş süreçleri, yazılımlar, veriler ve hedefler. Cevaplarınızdan size özel bir yapay zekâ potansiyel analizi hazırlıyor, otomasyonun size nerede zaman ve para kazandıracağını somut olarak gösteriyoruz.',
         'Çevrim içi daha hızlı; orada sesli mesaj veya videoyla da cevap verebilirsiniz: https://tnc-han.github.io/ki-check/tr/'],
  how='Nasıl doldurulur',
  steps=[('1. sayfa „{s1}“', 'Mevcut durumunuzla ilgili 25 soru. Uygun cevabın yanındaki sarı „{pick}“ sütununa x yazın.'),
         ('Tek veya çoklu seçim', 'Soruda „{one}“ yazıyorsa lütfen tek bir x koyun. „{multi}“ ise istediğiniz kadar.'),
         ('Diğer', 'Hiçbir cevap uymuyorsa kendi cevabınızı sarı „Diğer“ satırına yazın.'),
         ('2. sayfa „{s2}“', 'İş alanlarınızla ilgili 20 soru. Teşekkür olarak değerlendirmemizle birlikte hizmetlerimizde %10 indirim kodu alırsınız.'),
         ('3. sayfa „{s3}“', 'İletişim bilgileriniz ve veri işleme onayı.'),
         ('Örnek', 'Soru „Kaç kişi çalışıyor?“ → „21–50“ yanına x. Bu kadar.')],
  prog='İlerlemeniz', prog1='Ankette cevaplanan', prog2='Ayrıntılı bölümde cevaplanan', of='/', qs='soru',
  ret='Geri gönderme',
  retRows=[('E-posta adresi', 'nexxcon24@gmail.com'), ('Konu', 'Yapay Zekâ Potansiyel Testi – <şirketiniz>'),
           ('Ekler', 'Dilerseniz başka belgeler de ekleyin (ör. süreç tanımları, organizasyon şeması, örnek belgeler).'),
           ('Sorularınız mı var?', 'Telefon +49 171 1819905')],
  thanks='Çok teşekkürler! Cevaplarınızı titizlikle inceleyecek ve sizinle en kısa sürede yüz yüze tanışmayı dört gözle bekliyoruz.',
  s1='Anket', s2='Ayrıntılı bölüm (isteğe bağlı)', s3='İletişim',
  hdr=['No', 'Alan', 'Soru / cevap', 'Seçim türü', 'Seçiminiz'], pick='Seçiminiz',
  one='Tek cevap', multi='Çoklu seçim', other='Diğer (lütfen kendiniz yazın):', onlyx='Lütfen yalnızca x yazın.',
  cH='İletişim bilgileriniz',
  fields=['Ad soyad *', 'Şirket *', 'E-posta *', 'Telefon', 'Web sitesi', 'Ön görüşme istiyor musunuz? (evet/hayır)', 'Geri arama için uygun saatler'],
  yesno='"evet,hayır"', consentL='Onay *',
  consent='NEXXCON-24’ün bilgilerimi yapay zekâ potansiyel analizini hazırlamak ve benimle iletişime geçmek için işlemesini kabul ediyorum. Ayrıntılar: https://tnc-han.github.io/tr/gizlilik/  Onayımı istediğim zaman geri alabilirim.',
  agree='Onay (x yazın)', req='* Zorunlu alanlar', send='Lütfen doldurduğunuz dosyayı nexxcon24@gmail.com adresine gönderin.',
  prop='Yapay Zeka Potansiyel Testi NEXXCON-24'),
}[LANG]

F = 'Arial'
INK = '0E1116'; GOLD = 'C9A35B'; CHAMP = 'F3EBDD'; INPUT = 'FFF6CC'; GREY = '6B7280'
f_title = Font(name=F, size=18, bold=True, color=INK)
f_h = Font(name=F, size=12, bold=True, color='FFFFFF')
f_b = Font(name=F, size=10, color=INK)
f_bb = Font(name=F, size=10, bold=True, color=INK)
f_small = Font(name=F, size=9, italic=True, color=GREY)
fill_head = PatternFill('solid', fgColor=INK)
fill_area = PatternFill('solid', fgColor=CHAMP)
fill_in = PatternFill('solid', fgColor=INPUT)
thin = Side(style='thin', color='D9D9D9')
box = Border(left=thin, right=thin, top=thin, bottom=thin)
wrap = Alignment(wrap_text=True, vertical='top')
center = Alignment(horizontal='center', vertical='center')
fmt = lambda s: s.format(s1=T['s1'], s2=T['s2'], s3=T['s3'], pick=T['pick'], one=T['one'], multi=T['multi'])

wb = Workbook()

# ---------- Start ----------
st = wb.active; st.title = 'Start'
st.sheet_view.showGridLines = False
st.column_dimensions['A'].width = 3
st.column_dimensions['B'].width = 34
st.column_dimensions['C'].width = 70
st['B2'] = T['title']; st['B2'].font = f_title
st['B3'] = T['sub']; st['B3'].font = Font(name=F, size=11, italic=True, color=GREY)
r = 5
for t in T['intro']:
    st.merge_cells(start_row=r, start_column=2, end_row=r, end_column=3)
    c = st.cell(r, 2, t); c.font = f_b; c.alignment = wrap
    st.row_dimensions[r].height = 44
    r += 1
r += 1
st.cell(r, 2, T['how']).font = Font(name=F, size=12, bold=True, color=INK); r += 1
for a, b in T['steps']:
    st.cell(r, 2, fmt(a)).font = f_bb; c = st.cell(r, 3, fmt(b)); c.font = f_b; c.alignment = wrap
    st.cell(r, 2).alignment = wrap
    st.row_dimensions[r].height = 30
    r += 1
r += 1
st.cell(r, 2, T['prog']).font = Font(name=F, size=12, bold=True, color=INK); r += 1
prog_row = r
st.cell(r, 2, T['prog1']).font = f_b
r += 1
st.cell(r, 2, T['prog2']).font = f_b
r += 2
st.cell(r, 2, T['ret']).font = Font(name=F, size=12, bold=True, color=INK); r += 1
for a, b in T['retRows']:
    st.cell(r, 2, a).font = f_bb; c = st.cell(r, 3, b); c.font = f_b; c.alignment = wrap
    r += 1
r += 1
st.merge_cells(start_row=r, start_column=2, end_row=r, end_column=3)
c = st.cell(r, 2, T['thanks'])
c.font = Font(name=F, size=10, italic=True, color=INK); c.alignment = wrap
st.row_dimensions[r].height = 30

# ---------- Fragebögen ----------
def build(ws, items, part):
    ws.sheet_view.showGridLines = False
    widths = {'A': 7, 'B': 22, 'C': 62, 'D': 16, 'E': 11}
    for k, v in widths.items(): ws.column_dimensions[k].width = v
    for i, h in enumerate(T['hdr'], 1):
        c = ws.cell(1, i, h); c.font = f_h; c.fill = fill_head; c.alignment = center; c.border = box
    ws.freeze_panes = 'A2'
    dv = DataValidation(type='list', formula1='"x"', allow_blank=True, error=T['onlyx'], errorTitle=T['pick'])
    ws.add_data_validation(dv)
    r = 2
    for n, Q in enumerate(items, 1):
        nr = f'{n}' if part == 1 else f'V{n}'
        qrow = r
        for col, v in enumerate([nr, Q['area'], Q['q'], T['multi'] if Q.get('multi') else T['one']], 1):
            c = ws.cell(r, col, v); c.font = f_bb; c.fill = fill_area; c.border = box; c.alignment = wrap
        ws.cell(r, 4).font = Font(name=F, size=8, bold=True, color=GREY)
        ws.cell(r, 5).fill = fill_area; ws.cell(r, 5).border = box
        ws.row_dimensions[r].height = 30 if len(Q['q']) > 70 else 18
        r += 1
        first = r
        for o in Q['opts']:
            c = ws.cell(r, 3, o); c.font = f_b; c.alignment = wrap; c.border = box
            for col in (1, 2, 4): ws.cell(r, col).border = box
            e = ws.cell(r, 5); e.fill = fill_in; e.border = box; e.alignment = center; e.font = f_bb
            dv.add(e.coordinate)
            r += 1
        last = r - 1
        c = ws.cell(r, 3, T['other']); c.font = Font(name=F, size=10, italic=True, color=GREY); c.border = box
        ws.cell(r, 1).border = box; ws.cell(r, 2).border = box
        ws.merge_cells(start_row=r + 1, start_column=3, end_row=r + 1, end_column=5)
        o = ws.cell(r + 1, 3); o.fill = fill_in; o.alignment = wrap; o.font = f_b
        for col in range(1, 6): ws.cell(r + 1, col).border = box
        ws.row_dimensions[r + 1].height = 32
        # Hilfsmarke in Spalte F (ausgeblendet): 1 = beantwortet, für den Fortschritt
        ws.cell(qrow, 6, f'=IF(OR(COUNTIF(E{first}:E{last},"x")>0,LEN(TRIM(C{r+1}))>0),1,0)')
        ws.cell(qrow, 6).font = Font(name=F, size=8, color='FFFFFF')
        r += 3
    ws.column_dimensions['F'].hidden = True
    ws.print_title_rows = '1:1'
    ws.page_setup.orientation = 'portrait'
    return f'F2:F{r}'

s1 = build(wb.create_sheet(T['s1']), d['PART1'], 1)
s2 = build(wb.create_sheet(T['s2']), d['PART2'], 2)
q = lambda name: "'" + name.replace("'", "''") + "'"
st.cell(prog_row, 3, f"=SUM({q(T['s1'])}!{s1})&\" {T['of']} {len(d['PART1'])} {T['qs']}\"").font = f_bb
st.cell(prog_row + 1, 3, f"=SUM({q(T['s2'])}!{s2})&\" {T['of']} {len(d['PART2'])} {T['qs']}\"").font = f_bb

# ---------- Kontakt ----------
kt = wb.create_sheet(T['s3'])
kt.sheet_view.showGridLines = False
kt.column_dimensions['A'].width = 3; kt.column_dimensions['B'].width = 36; kt.column_dimensions['C'].width = 60
kt['B2'] = T['cH']; kt['B2'].font = Font(name=F, size=14, bold=True, color=INK)
r = 4
for f in T['fields']:
    kt.cell(r, 2, f).font = f_bb
    c = kt.cell(r, 3); c.fill = fill_in; c.border = box; c.font = f_b
    r += 1
dvj = DataValidation(type='list', formula1=T['yesno'], allow_blank=True); kt.add_data_validation(dvj); dvj.add('C9')
r += 1
kt.cell(r, 2, T['consentL']).font = f_bb
c = kt.cell(r, 3, T['consent']); c.font = f_b; c.alignment = wrap; kt.row_dimensions[r].height = 58
r += 1
kt.cell(r, 2, T['agree']).font = f_bb
c = kt.cell(r, 3); c.fill = fill_in; c.border = box; c.alignment = center
dvx = DataValidation(type='list', formula1='"x"', allow_blank=True); kt.add_data_validation(dvx); dvx.add(c.coordinate)
r += 2
kt.cell(r, 2, T['req']).font = f_small
r += 1
kt.cell(r, 2, T['send']).font = f_b

for ws in wb.worksheets:
    ws.page_setup.fitToWidth = 1; ws.page_setup.fitToHeight = 0; ws.sheet_properties.pageSetUpPr.fitToPage = True; ws.page_setup.paperSize = ws.PAPERSIZE_A4
    ws.sheet_properties.tabColor = GOLD if ws.title == 'Start' else INK
wb.active = 0
wb.properties.title = T['prop']
wb.properties.creator = 'NEXXCON-24'
wb.save(out)
print('ok', out)
