export const SUBMIT_URL = "https://api.web3forms.com/submit";

export interface SubmitResponse {
  success: boolean;
  message?: string;
}

export async function submit(data: unknown) {
  const response = await fetch(SUBMIT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data, null, 2),
  });

  const result = (await response.json()) as SubmitResponse;

  return result;
}
