import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY

def build_pdf():
    os.makedirs('public', exist_ok=True)
    pdf_path = 'public/resume.pdf'
    
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=32,
        bottomMargin=32
    )
    
    story = []
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#111827')
    )
    
    contact_style = ParagraphStyle(
        'ContactLine',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#374151')
    )
    
    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#0f172a'),
        textTransform='uppercase'
    )
    
    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#1f2937')
    )
    
    bold_subheading = ParagraphStyle(
        'BoldSubheading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#111827')
    )
    
    right_meta = ParagraphStyle(
        'RightMeta',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=12,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#4b5563')
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        leftIndent=12,
        firstLineIndent=-8,
        alignment=TA_LEFT,
        textColor=colors.HexColor('#1f2937')
    )

    def section_divider(title):
        p = Paragraph(title, section_heading)
        hr = HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#94a3b8'), spaceBefore=2, spaceAfter=4)
        return [p, hr]

    # Header
    story.append(Paragraph("PRAGATHI PATTAR", title_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph("Pune, Maharashtra | +91 77699 77046 | pragathispattar@gmail.com | LinkedIn | Portfolio", contact_style))
    story.append(Spacer(1, 8))

    # Objective
    story.extend(section_divider("OBJECTIVE"))
    story.append(Paragraph(
        "Operations-focused, data-driven professional with hands-on experience coordinating cross-functional teams, "
        "tracking performance through dashboards, and driving projects from planning to execution on the ground. "
        "Built a strong base in problem solving, process improvement, and risk management through an operations internship "
        "at an automation company and three self-directed Agile projects. Comfortable using Excel, Power BI, and SQL to "
        "turn raw data into decisions. Aspiring to contribute as a Business Analyst, Program / Operations Manager, Data Analyst, or Product Owner.",
        body_style
    ))
    story.append(Spacer(1, 6))

    # Experience
    story.extend(section_divider("EXPERIENCE"))
    exp_table_data = [
        [
            Paragraph("<b>Indusnex LLP</b>", bold_subheading),
            Paragraph("<div align='right'><i>March 2026 – August 2026</i></div>", right_meta)
        ],
        [
            Paragraph("<i>Operations Analyst Intern</i>", right_meta),
            Paragraph("", right_meta)
        ]
    ]
    t = Table(exp_table_data, colWidths=[340, 200])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t)
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Supported planning and coordination of an Ignition-based MES/SCADA automation project, partnering with engineering and automation teams to keep timelines, requirements, and deliverables on track.", bullet_style))
    story.append(Paragraph("• Authored requirements documentation, process guides, and technical/project reports, and tracked production and project data through dashboards covering production monitoring, equipment status, and HMI/SCADA visualization.", bullet_style))
    story.append(Paragraph("• Executed User Acceptance Testing (UAT) and issue tracking through to resolution, gaining hands-on exposure to data collection, alarms, and structured testing practices.", bullet_style))
    story.append(Spacer(1, 6))

    # Projects
    story.extend(section_divider("PROJECTS"))
    
    # Project 1
    story.append(Paragraph("<b>Customer-Shopping-Behavior-Analysis</b> &nbsp;&nbsp; <i><font color='#0284c7'>Link</font></i>", bold_subheading))
    story.append(Paragraph("• <b>Automation:</b> Built an automated analytics workflow that picks up new transaction reports and keeps a live Power BI dashboard current with no manual steps.", bullet_style))
    story.append(Paragraph("• <b>Analysis:</b> Cleaned 3,900 retail transactions in Python and used Snowflake SQL for customer segmentation, discount behaviour, and product performance.", bullet_style))
    story.append(Paragraph("• <b>Insights:</b> Found that subscribers spent 68% more and drove 45% of revenue, and that only 15% of customers were Loyal. This led to recommendations on subscriber perks and a loyalty program.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 2
    story.append(Paragraph("<b>TechNova — HR Management System and LMS</b> &nbsp;&nbsp; <i><font color='#0284c7'>Link</font></i>", bold_subheading))
    story.append(Paragraph("<i>Onboarding, training, and rollout planning</i>", right_meta))
    story.append(Paragraph("• Planned onboarding, training, and go-live, adding a two-week payroll trial run to catch problems before launch.", bullet_style))
    story.append(Paragraph("• Identified payroll cutover as the highest-risk step and added an extra review before full rollout.", bullet_style))
    story.append(Paragraph("• Checked each deliverable against the original requirements before marking it complete.", bullet_style))
    story.append(Spacer(1, 4))

    # Project 3
    story.append(Paragraph("<b>Cafe Sales Analysis</b> &nbsp;&nbsp; <i><font color='#0284c7'>Link</font></i>", bold_subheading))
    story.append(Paragraph("• <b>Data prep:</b> Cleaned and modelled 149K cafe transactions across 3 NYC stores in Power Query and Power Pivot, with DAX measures for Total Sales and Average Order Value.", bullet_style))
    story.append(Paragraph("• <b>Dashboard:</b> Built an interactive Excel dashboard with KPI cards and slicers to analyse sales.", bullet_style))
    story.append(Paragraph("• <b>Insights:</b> Found that 8 to 10 AM drives about $256K of $698K total revenue, monthly sales grew 118% from February to June, and whole bean coffee dominates the top products. This points to staffing and stock priorities.", bullet_style))
    story.append(Spacer(1, 6))

    # Education
    story.extend(section_divider("EDUCATION"))
    edu_table_data = [
        [
            Paragraph("<b>Vidya Pratishthan College of Agricultural Biotechnology (MPKV)</b>", bold_subheading),
            Paragraph("<div align='right'><i>2022 – 2025</i></div>", right_meta)
        ],
        [
            Paragraph("<i>B.Tech, Biotechnology</i> — statistics, data interpretation, and clear reporting", body_style),
            Paragraph("", right_meta)
        ]
    ]
    t2 = Table(edu_table_data, colWidths=[400, 140])
    t2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t2)
    story.append(Spacer(1, 6))

    # Skills
    story.extend(section_divider("SKILLS"))
    skills_lines = [
        "<b>Data Analytics:</b> Power BI · Dashboard Design and KPI Tracking · Data Validation and Cleaning · Trend and Root-Cause Analysis · Reporting and Data Storytelling, Exploratory Data Analysis, Feature Engineering",
        "<b>Languages & Tools:</b> SQL · Excel · Google Sheets · Python",
        "<b>AI & Automation:</b> AI-Assisted Workflows (Claude, Co-pilot, Gemini, OpenAI) · Prompt Engineering · LLM-Based Workflow Design · Spec-Driven Development · BMAD Framework · Vibe Coding",
        "<b>Operations & Category Management:</b> Process Mapping (SOPs) · Process Improvement · Risk Management · Stakeholder and Cross-Functional Coordination · UAT and Quality Checks · Requirements Documentation · Rollout Planning",
        "<b>Tools:</b> Jira · Confluence · Trello · Notion · Miro · Monday.com · TeamGantt · Agile · Scrum · Kanban · SDLC · STLC",
        "<b>SoftSkills:</b> Attention to Detail · Critical Thinking · Ownership and Bias for Action"
    ]
    for line in skills_lines:
        story.append(Paragraph(line, body_style))
        story.append(Spacer(1, 1.5))
    story.append(Spacer(1, 4))

    # Certifications
    story.extend(section_divider("CERTIFICATIONS"))
    certs = [
        "Google Project Management Certificate, Coursera",
        "Six Sigma Yellow Belt (SSYB), 6sigmastudy",
        "Business Analysis Fundamentals, BALearning",
        "Scrum Fundamentals Certified (SFC), SCRUMstudy",
        "Kanban Essentials, KanbanStudy",
        "OKR Fundamentals, OKRStudy",
        "Claude 101, Anthropic Academy"
    ]
    for c in certs:
        story.append(Paragraph(f"• {c}", bullet_style))

    doc.build(story)
    print(f"Generated {pdf_path} successfully!")

if __name__ == '__main__':
    build_pdf()
