# Set B · Web App Evaluation (English)

English version of [Bộ B](bo_b_danh_gia_web_app.md). Administered **after** the participant uses the web demo ([`#/demo`](https://movago-odylytics.vercel.app/#/demo)). [Set A](set_a_market_problem_survey_en.md) is administered before the demo. Both sets use the same participant code (`P01`, `P02`…) so data can be linked without collecting identity.

Aim: to show that people in the industry can **use** the tool, **understand** its results, **trust** the evidence and **intend to use it for real**. Every measure here is taken on **simulated data**. Do not report it as effectiveness in real work; that needs a pilot (see [project brief](../colio_ai_project_brief.md), section 3).

Estimated time: about 25–30 minutes, of which tasks take 12–15 minutes and the questionnaire 10–12 minutes.

## Study design

| Item | Rule |
|---|---|
| Participants | People who passed screening in Set A (S1, S2); prefer AP staff and purchase decision-makers. |
| Sample size | 10–20 for observed usability testing. Five users find most interface problems, but reporting numeric measures needs more, so label results "initial signal" below 20. The self-completed remote version needs n ≥ 30 to report percentages. |
| Format | **Observed** (in person or video call with screen sharing, timed with a stopwatch) or **self-completed remote** (questionnaire only, no behavioural measures). Report the two groups separately. |
| Device | Record laptop or phone and browser. Use the same deployment for everyone and record its commit hash at test time. |
| Moderator rules | Read tasks verbatim, **give no hints**, do not point at the screen. If a participant is stuck for more than 3 minutes on a task, record "gave up", show how to continue and move to the next task. The moderator should not be the interface designer where possible. |
| Ethics | Use the Set A consent (C0). Say: "We are evaluating the tool, not you." Data are simulated, so participants need not enter any real company data. |
| Reset | Press **Reset demo** before each participant to clear the intake history in `localStorage`. |

### Opening script (read verbatim)

> Thank you. You will use a trial version of a tool for checking freight invoices. The data in it are simulated. There are no right or wrong answers, because we want to learn where the tool is confusing. Please think aloud as you work. You may stop at any time.

## Part 1 · Observed tasks

For each task the observer records **success** (correct, no help), **success with help**, **wrong**, **gave up**, plus seconds to complete and number of wrong clicks.

| Task | Read to the participant verbatim | Correct result | Case (see [web/README](../web/README.md)) |
|---|---|---|---|
| T1 | "Open the invoice case `INV-095`, run the reconciliation and tell me whether there is a problem with this invoice." | States that the DOC fee is **+800,000 VND over, pre-tax**. | `INV-095` |
| T2 | "Show me what evidence supports that difference." | Opens both sides of the evidence: the DOC line on the invoice (page 1) and line 12 of the `RATE-V3` rate card. | `INV-095` |
| T3 | "Request verification for this item and record a reason." | Clicks **Request verification**, picks a recipient, writes a reason and sends; the status changes to **Sent for verification**. | `INV-095` |
| T4 | "Export a report you could send to the chief accountant." | Clicks **Export CSV** and downloads the file. | `INV-095` |
| T5 | "Now open `INV-095-NORATE`. How is this invoice different from the previous one?" | Distinguishes **Missing basis** (no reference rate) from **Discrepancy**. The participant notices that the expected amount and difference are left empty. | `INV-095-NORATE` |
| T6 | "Send the `INV-095` invoice again under a new file name. How does the system react?" | Notices the system reports **Duplicate of an invoice already received** (same content as `INV-095.pdf`). The moderator hands over `INV-095-resent.pdf` (from the sample files list) or lets the participant use the button **Simulate: resend INV-095 under a new name**; record which was used. | resent |
| T7 | "Open `INV-VN-020` and tell me whether the system agrees with the invoice." | Names the THD line **+1,800,000 VND** over, and the DOF line as matching. | `INV-VN-020` |

Keep T1→T7 in fixed order for the first part, because T1–T4 form the main flow. With 20 or more participants, randomise T5, T6, T7 and record the order used.

### Observer log

| Code | Task | Result | Seconds | Wrong clicks | Hint given | Quote worth recording |
|---|---|---|---|---|---|---|
| P01 | T1 | | | | | |

### Measures derived from the log

- **Completion rate** per task = successes without help / participants, with 95% Wilson interval. Report numerator and denominator.
- **Time on task**: median and interquartile range, successful participants only. Do not use the mean when n is small.
- **Errors**: mean wrong clicks per task.
- **Most error-prone tasks**: the tasks with the lowest completion rates are the priority for interface fixes.

## Part 2 · Post-task questionnaire

### 2.1 Task difficulty (SEQ)

After each task T1–T7, ask one question (Single Ease Question):

**SEQ.** Overall, how **easy or difficult** was this task? · Scale 1–7 · 1 = Very difficult · 7 = Very easy.

Report the mean for each task. The usual benchmark for SEQ is about 5.5.

### 2.2 System Usability Scale (SUS)

Scale 1–5: 1 = Strongly disagree · 5 = Strongly agree. Keep the 10 items in **this exact order**, because scoring depends on odd (positive) and even (negative) items.

| # | Item |
|---|---|
| SUS1 | I think that I would like to use this system frequently. |
| SUS2 | I found the system unnecessarily complex. |
| SUS3 | I thought the system was easy to use. |
| SUS4 | I think that I would need the support of a technical person to be able to use this system. |
| SUS5 | I found the various functions in this system were well integrated. |
| SUS6 | I thought there was too much inconsistency in this system. |
| SUS7 | I would imagine that most people would learn to use this system very quickly. |
| SUS8 | I found the system very cumbersome to use. |
| SUS9 | I felt very confident using the system. |
| SUS10 | I needed to learn a lot of things before I could get going with this system. |

**Scoring (Brooke, 1996).** For odd items take (score − 1). For even items take (5 − score). Sum the ten values and multiply by 2.5 to get a 0–100 score. Report the mean and 95% confidence interval. Reference points: 68 is the average benchmark; above 80 is good. SUS is **not a percentage**; do not say "scored 75%".

### 2.3 Technology acceptance (TAM/UTAUT)

Scale 1–7: 1 = Strongly disagree · 7 = Strongly agree. Three items per construct; average within each construct and check Cronbach's α (≥ 0.7 is acceptable).

| Construct | # | Item |
|---|---|---|
| Perceived usefulness | U1 | This tool would help me check freight invoices faster. |
| | U2 | This tool would help me find discrepancies I could easily miss. |
| | U3 | This tool would make my reconciliation work more effective. |
| Perceived ease of use | E1 | Interacting with this tool is clear and understandable. |
| | E2 | It is easy for me to do what I want with this tool. |
| | E3 | Learning to use this tool would be easy for me. |
| Social influence | N1 | My colleagues would support my using this tool. |
| | N2 | My manager would support my using this tool. |
| | N3 | My company would be ready to support deploying this tool. |
| Behavioural intention | I1 | If my company had this tool, I would use it. |
| | I2 | I intend to use this tool in my work within the next 6 months. |
| | I3 | I would recommend this tool to colleagues. |

### 2.4 Trust and transparency of the AI

Scale 1–7 as above.

| # | Item |
|---|---|
| X1 | I understand why the system flagged that item as a discrepancy. |
| X2 | The evidence shown for each line is enough for me to check it myself. |
| X3 | I trust the system's reconciliation result. |
| X4 | I would still want to check the alerts myself before deciding to pay. |
| X5 | I understand the difference between **Matched**, **Discrepancy** and **Missing basis**. |
| X6 | The **Missing basis** label reassures me more than the system guessing a price. |

X4 and X6 ask about desired behaviour, not only confidence. A high score on X4 is a **good sign**: users understand that the system supports rather than replaces their decision.

**Comprehension check.** After X1–X6, ask two multiple-choice questions with one correct answer each:

| # | Question | Correct answer |
|---|---|---|
| K1 | In case `INV-095`, which fee line holds the discrepancy? | The document fee (DOC). |
| K2 | What does the label **Missing basis** mean? | No suitable approved rate applies (or several match with no priority rule), so the system leaves the expected amount and difference empty until pricing adds one. |

The share answering K1 and K2 correctly is evidence that the interface communicates accurately, independent of subjective impressions.

### 2.5 Comparison with the current way of working

| # | Question | Type |
|---|---|---|
| W1 | For an invoice like `INV-095`, how many minutes would it take you with your current method? | Number of minutes |
| W2 | How many minutes do you estimate it would take with this tool? | Number of minutes |
| W3 | Would this tool **replace**, **complement** or be **unrelated to** how you work today? | Single choice |
| W4 | What about the tool makes you want to use it? | Short answer |
| W5 | What makes you hesitant to use it? | Short answer |
| W6 | Which missing features would you need before using it in real work? | Multiple choice: Reading more invoice layouts · TMS/ERP integration · Debit notes · Consolidated multi-shipment invoices · Multiple currencies · Multi-level payment approval · Reports by supplier · Other |

W1 and W2 are subjective estimates; record them separately and place them beside the measured seconds from Part 1. Do not present W1 minus W2 as real effectiveness; it is a perception only. Real hands-on minutes need a pilot.

## Part 3 · Behavioural commitment

| # | Question | Options |
|---|---|---|
| A1 | After trying the tool, what are you willing to do next? (choose the highest level) | Nothing · Receive updates · Show the team 1–2 masked invoices · Join a 2–4 week pilot with real data · Introduce the person who decides on purchases |
| A2 | If the tool had the features in W6, what monthly price would you consider reasonable? | Number, VND/month. Compare with the Van Westendorp range from Set A. |

Compare A1 in Set A and Set B for the same person (via code `P`). The share of people who **raise their commitment level** after seeing the demo is evidence that the demo is persuasive.

## Analysis and reporting

| Metric | Method | Note |
|---|---|---|
| Completion rate T1–T7 | Successes without help / n, 95% Wilson interval | One row per task. |
| Time on task | Median, quartiles | Successful participants. |
| SEQ | Mean per task | Benchmark ~5.5. |
| SUS | Mean, SD, 95% confidence interval | Compare with 68. Show the distribution. |
| TAM | Mean per construct and Cronbach's α | Analyse purchase decision-makers (S4) separately if n ≥ 10. |
| AI trust | Means of X1–X6, share correct on K1, K2 | High X4 is good; do not reverse its meaning. |
| Commitment shift | Number raising A1 from Set A to Set B / n | Sign test or paired Wilcoxon when n ≥ 20. |
| Correlation | Spearman between U1–U3 and I1–I3 | Only when n ≥ 30. |

## Reporting rules

- Label every behavioural measure **simulated data** and state the commit hash of the demo tested.
- Separate **observed** from **self-completed remote** participants. Do not pool their seconds.
- Do not claim "X% time saved" from W1 and W2. Those are subjective estimates only.
- With small samples, write "initial signal". List all interface problems found, including those already fixed, with the number of participants who met each.
- Limitations: convenience sample; simulated data; participants know they are being evaluated (observer effect); demo cases are pre-designed and easier than real documents.
- After fixing the interface, run a small second round (5 people) and report the change in SUS and completion rate. A repeated result is evidence of improvement.

## References

- Brooke, J. (1996). SUS: A quick and dirty usability scale. In Jordan et al. (Eds.), *Usability Evaluation in Industry*. Taylor & Francis.
- Sauro, J., & Lewis, J. R. (2016). *Quantifying the User Experience* (2nd ed.). Morgan Kaufmann. (SEQ, confidence intervals, SUS benchmarks.)
- Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. *MIS Quarterly*, 13(3).
- Venkatesh, V., Morris, M., Davis, G., & Davis, F. (2003). User acceptance of information technology: Toward a unified view. *MIS Quarterly*, 27(3).
