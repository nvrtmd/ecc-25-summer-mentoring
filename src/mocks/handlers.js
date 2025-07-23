import { http, HttpResponse } from "msw";

// 더미 데이터 생성
const dummyUsers = Array.from({ length: 30 }, (_, i) => ({
  name: `User ${i + 1}`,
  id: Math.floor(100000 + Math.random() * 900000),
  age: Math.floor(20 + Math.random() * 40),
  interests: ["sports", "reading", "traveling"],
  profileImage: `https://randomuser.me/api/portraits/${
    Math.random() < 0.5 ? "men" : "women"
  }/${Math.floor(Math.random() * 100)}.jpg`,
  bio: `I love ${
    ["sports", "reading", "traveling"][Math.floor(Math.random() * 3)]
  }.`,
}));

// API 핸들러
export const handlers = [
  http.get("/api/matching-users", () => {
    // 무작위 유저 한 명을 선택
    const randomUser =
      dummyUsers[Math.floor(Math.random() * dummyUsers.length)];

    // 랜덤 유저 한 명 반환
    return HttpResponse.json(randomUser);
  }),
];
