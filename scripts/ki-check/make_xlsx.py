import json, sys
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.comments import Comment

src, out = sys.argv[1], sys.argv[2]
d = json.load(open(src, encoding='utf-8'))

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

wb = Workbook()

# ---------- Start ----------
st = wb.active; st.title = 'Start'
st.sheet_view.showGridLines = False
st.column_dimensions['A'].width = 3
st.column_dimensions['B'].width = 34
st.column_dimensions['C'].width = 70
r = 2
st['B2'] = 'KI-Potenzialcheck · NEXXCON-24'; st['B2'].font = f_title
st['B3'] = 'Fragebogen zum Ausfüllen in Ihrem eigenen Tempo'; st['B3'].font = Font(name=F, size=11, italic=True, color=GREY)
intro = [
    'Mit diesem Fragebogen erfassen wir Ihre heutige Situation: Abläufe, Software, Daten und Ziele. Daraus bereiten wir Ihre persönliche KI-Potenzialanalyse vor – mit konkreten Ansatzpunkten, wo Automatisierung bei Ihnen Zeit und Geld spart.',
    'Schneller geht es online, dort können Sie auch per Sprachnachricht oder Video antworten: https://tnc-han.github.io/ki-check/',
]
r = 5
for t in intro:
    st.merge_cells(start_row=r, start_column=2, end_row=r, end_column=3)
    c = st.cell(r, 2, t); c.font = f_b; c.alignment = wrap
    st.row_dimensions[r].height = 44
    r += 1

r += 1
st.cell(r, 2, 'So füllen Sie aus').font = Font(name=F, size=12, bold=True, color=INK); r += 1
steps = [
    ('1. Blatt „Fragebogen“', '25 Fragen zur Ist-Situation. Setzen Sie in der gelben Spalte „Ihre Wahl“ ein x neben die passende Antwort.'),
    ('Einfach- oder Mehrfachauswahl', 'Steht bei der Frage „Eine Antwort“, bitte genau ein x. Bei „Mehrfachauswahl“ beliebig viele.'),
    ('Sonstiges', 'Passt keine Antwort, schreiben Sie Ihre Antwort frei in die gelbe Zeile „Sonstiges“.'),
    ('2. Blatt „Vertiefung (optional)“', '20 Fragen zu Ihren Geschäftsbereichen. Als Dankeschön erhalten Sie mit unserer Auswertung einen Code über 10 % Rabatt auf unsere Leistungen.'),
    ('3. Blatt „Kontakt“', 'Ihre Kontaktdaten und die Einwilligung zur Datenverarbeitung.'),
    ('Beispiel', 'Frage „Wie viele Mitarbeitende?“ → x neben „21–50“. Fertig.'),
]
for a, b in steps:
    st.cell(r, 2, a).font = f_bb; c = st.cell(r, 3, b); c.font = f_b; c.alignment = wrap
    st.cell(r, 2).alignment = wrap
    st.row_dimensions[r].height = 30
    r += 1

r += 1
st.cell(r, 2, 'Ihr Fortschritt').font = Font(name=F, size=12, bold=True, color=INK); r += 1
prog_row = r
st.cell(r, 2, 'Beantwortet im Fragebogen').font = f_b
r += 1
st.cell(r, 2, 'Beantwortet in der Vertiefung').font = f_b
r += 2
st.cell(r, 2, 'Zurücksenden').font = Font(name=F, size=12, bold=True, color=INK); r += 1
for a, b in [
    ('Per E-Mail an', 'nexxcon24@gmail.com'),
    ('Betreff', 'KI-Potenzialcheck – <Ihr Unternehmen>'),
    ('Anlagen', 'Gerne weitere Unterlagen mitschicken (z. B. Prozessbeschreibungen, Organigramm, Beispiel-Dokumente).'),
    ('Fragen?', 'Telefon 0171 1819905'),
]:
    st.cell(r, 2, a).font = f_bb; c = st.cell(r, 3, b); c.font = f_b; c.alignment = wrap
    r += 1
r += 1
st.merge_cells(start_row=r, start_column=2, end_row=r, end_column=3)
c = st.cell(r, 2, 'Vielen Dank! Wir analysieren Ihre Antworten sorgfältig und freuen uns darauf, Sie bald persönlich kennenzulernen.')
c.font = Font(name=F, size=10, italic=True, color=INK); c.alignment = wrap
st.row_dimensions[r].height = 30

# ---------- Fragebögen ----------
dv_x = None
def build(ws, items, part):
    ws.sheet_view.showGridLines = False
    widths = {'A': 7, 'B': 22, 'C': 62, 'D': 16, 'E': 11}
    for k, v in widths.items(): ws.column_dimensions[k].width = v
    hdr = ['Nr.', 'Bereich', 'Frage / Antwort', 'Auswahl', 'Ihre Wahl']
    for i, h in enumerate(hdr, 1):
        c = ws.cell(1, i, h); c.font = f_h; c.fill = fill_head; c.alignment = center; c.border = box
    ws.freeze_panes = 'A2'
    dv = DataValidation(type='list', formula1='"x"', allow_blank=True,
                        error='Bitte nur ein x eintragen.', errorTitle='Ihre Wahl')
    ws.add_data_validation(dv)
    flags = []
    r = 2
    for n, Q in enumerate(items, 1):
        nr = f'{n}' if part == 1 else f'V{n}'
        qrow = r
        for col, v in enumerate([nr, Q['area'], Q['q'], 'Mehrfachauswahl' if Q.get('multi') else 'Eine Antwort'], 1):
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
        c = ws.cell(r, 3, 'Sonstiges (bitte frei ergänzen):'); c.font = Font(name=F, size=10, italic=True, color=GREY); c.border = box
        ws.cell(r, 1).border = box; ws.cell(r, 2).border = box
        ws.merge_cells(start_row=r + 1, start_column=3, end_row=r + 1, end_column=5)
        o = ws.cell(r + 1, 3); o.fill = fill_in; o.alignment = wrap; o.font = f_b
        for col in range(1, 6): ws.cell(r + 1, col).border = box
        ws.row_dimensions[r + 1].height = 32
        other = f'C{r+1}'
        # Hilfsmarke: 1 = beantwortet (für Fortschritt)
        ws.cell(qrow, 6, f'=IF(OR(COUNTIF(E{first}:E{last},"x")>0,LEN(TRIM({other}))>0),1,0)')
        ws.cell(qrow, 6).font = Font(name=F, size=8, color='FFFFFF')
        flags.append(f'F{qrow}')
        r += 3
    ws.column_dimensions['F'].hidden = True
    ws.print_title_rows = '1:1'
    ws.page_setup.orientation = 'portrait'; ws.page_setup.fitToWidth = 1; ws.page_setup.fitToHeight = 0
    ws.sheet_properties.pageSetUpPr.fitToPage = True
    return f'F2:F{r}'

fb = wb.create_sheet('Fragebogen')
s1 = build(fb, d['PART1'], 1)
vt = wb.create_sheet('Vertiefung (optional)')
s2 = build(vt, d['PART2'], 2)

st.cell(prog_row, 3, f"=SUM(Fragebogen!{s1})&\" von {len(d['PART1'])} Fragen\"").font = f_bb
st.cell(prog_row + 1, 3, f"=SUM('Vertiefung (optional)'!{s2})&\" von {len(d['PART2'])} Fragen\"").font = f_bb

# ---------- Kontakt ----------
kt = wb.create_sheet('Kontakt')
kt.sheet_view.showGridLines = False
kt.column_dimensions['A'].width = 3; kt.column_dimensions['B'].width = 36; kt.column_dimensions['C'].width = 60
kt['B2'] = 'Ihre Kontaktdaten'; kt['B2'].font = Font(name=F, size=14, bold=True, color=INK)
fields = ['Name *', 'Unternehmen *', 'E-Mail *', 'Telefon', 'Website', 'Erstgespräch gewünscht? (ja/nein)', 'Bevorzugte Zeiten für einen Rückruf']
r = 4
for f in fields:
    kt.cell(r, 2, f).font = f_bb
    c = kt.cell(r, 3); c.fill = fill_in; c.border = box; c.font = f_b
    r += 1
dvj = DataValidation(type='list', formula1='"ja,nein"', allow_blank=True); kt.add_data_validation(dvj); dvj.add('C9')
r += 1
kt.cell(r, 2, 'Einwilligung *').font = f_bb
c = kt.cell(r, 3, 'Ich bin einverstanden, dass NEXXCON-24 meine Angaben zur Vorbereitung der KI-Potenzialanalyse und zur Kontaktaufnahme verarbeitet. Details: https://tnc-han.github.io/datenschutz/  Die Einwilligung kann ich jederzeit widerrufen.')
c.font = f_b; c.alignment = wrap; kt.row_dimensions[r].height = 58
r += 1
kt.cell(r, 2, 'Zustimmung (x eintragen)').font = f_bb
c = kt.cell(r, 3); c.fill = fill_in; c.border = box; c.alignment = center
dvx = DataValidation(type='list', formula1='"x"', allow_blank=True); kt.add_data_validation(dvx); dvx.add(c.coordinate)
r += 2
kt.cell(r, 2, '* Pflichtangaben').font = f_small
r += 1
kt.cell(r, 2, 'Bitte senden Sie die ausgefüllte Datei an nexxcon24@gmail.com.').font = f_b

for ws in wb.worksheets:
    ws.page_setup.fitToWidth = 1; ws.page_setup.fitToHeight = 0; ws.sheet_properties.pageSetUpPr.fitToPage = True; ws.page_setup.paperSize = ws.PAPERSIZE_A4
    ws.sheet_properties.tabColor = GOLD if ws.title == 'Start' else INK
wb.active = 0
wb.properties.title = 'KI-Potenzialcheck NEXXCON-24'
wb.properties.creator = 'NEXXCON-24'
wb.save(out)
print('ok', out)
