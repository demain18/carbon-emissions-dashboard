import {
  Companies,
  Countries,
  PostData,
  PostDataDto as CompaniesDto,
  StatusData,
} from "./mockupData";

// lib/api.ts
let _countries = [...Countries];
let _companies = [...Companies];
let _posts = [...PostData];
let _status = StatusData;

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const jitter = () => 200 + Math.random() * 600;
const maybeFail = () => Math.random() < 0.15;

export async function fetchCountries() {
  await delay(jitter());
  return _countries;
}

export async function fetchCompanies() {
  await delay(jitter());
  return _companies;
}

export async function fetchPosts() {
  await delay(jitter());
  return _posts;
}

export async function fetchStatus() {
  await delay(jitter());
  return _status;
}

export async function createOrUpdatePost(
  p: Omit<CompaniesDto, "id"> & { id?: string }
) {
  await delay(jitter());
  if (maybeFail()) throw new Error("Save failed");
  if (p.id) {
    _posts = _posts.map((x) => (x.id === p.id ? (p as CompaniesDto) : x));
    return p as CompaniesDto;
  }
  const created = { ...p, id: crypto.randomUUID() };
  _posts = [..._posts, created];
  return created;
}
