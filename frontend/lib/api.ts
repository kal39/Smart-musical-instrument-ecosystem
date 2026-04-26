// frontend/lib/api.ts
export const API_BASE_URL = "http://localhost:8080/api/v1";

export async function getInstruments() {
  const res = await fetch(`${API_BASE_URL}/listings`, { cache: 'no-store' });
  if (!res.ok) throw new Error("Failed to fetch instruments");
  return res.json();
}