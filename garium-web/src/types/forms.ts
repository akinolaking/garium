export interface ContactFormData {
  name: string
  organisation: string
  country: string
  teamSize: string
  planInterest: string
  message: string
}

export interface ConsultationWebhookPayload {
  submissionId: string
  formId: string
  submittedAt: string
  fields: Record<string, string>
}
