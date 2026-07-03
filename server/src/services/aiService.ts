export const generatePreVisitSummary = async (
  symptoms: string
) => {
  let urgency = "Low";

  const text = symptoms.toLowerCase();

  if (
    text.includes("chest") ||
    text.includes("breathing")
  ) {
    urgency = "High";
  } else if (
    text.includes("fever") ||
    text.includes("pain")
  ) {
    urgency = "Medium";
  }

  return {
    urgency,
    chiefComplaint: symptoms,
    suggestedQuestions: [
      "When did the symptoms start?",
      "Have the symptoms worsened?",
      "Are you taking any medication?",
    ],
  };
};

export const generatePostVisitSummary = async (
  notes: string
) => {
  return {
    summary:
      "Your condition has been evaluated. Please follow your doctor's advice and complete the prescribed medications.",

    medicationSchedule:
      "Take medicines exactly as prescribed by your doctor.",

    followUp:
      "Return for a follow-up visit after 7 days or earlier if your symptoms worsen.",

    originalNotes: notes,
  };
};