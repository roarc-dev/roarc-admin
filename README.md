# Roarc Admin

**관리자 전용 프로젝트** - Roarc 웨딩 관리자 시스템 (Next.js 버전)

> ⚠️ **중요**: 이 프로젝트는 관리자만 사용하는 백오피스입니다.  
> Vercel 프로젝트 이름: **`roarc-admin`**

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
# 또는
yarn install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 환경 변수를 설정하세요:

```env
NEXT_PUBLIC_PROXY_BASE_URL=https://wedding-admin-proxy.vercel.app
```

### 3. 로컬 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📦 빌드 및 배포

### 로컬 빌드 테스트

```bash
npm run build
npm start
```

### Vercel 배포

1. [Vercel](https://vercel.com)에서 새 프로젝트 생성
2. 이 레포지토리를 연결
3. 환경 변수 설정:
   - `NEXT_PUBLIC_PROXY_BASE_URL`: `https://wedding-admin-proxy.vercel.app`
4. 배포 완료

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Inline Styles (Framer 친화적)
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📋 기능

- ✅ 사용자 관리 (추가, 수정, 삭제)
- ✅ 사용자 승인/거부 시스템
- ✅ 페이지 타입 관리 (papillon, eternal, fiore, mobile)
- ✅ 만료 기간 관리
- ✅ RSVP 페이지 자동 생성
- ✅ 일괄 삭제 기능
- ✅ 반응형 UI

## 🔧 설정

### API 프록시 URL 변경

다른 환경에서 사용하려면 `next.config.js`의 `NEXT_PUBLIC_PROXY_BASE_URL`을 수정하세요.

### 페이지 타입 확장

`src/components/UserManagement.tsx`의 `PAGE_TYPES` 배열에 새로운 타입을 추가하세요.

## 📝 개발 노트

- 원본 Framer 컴포넌트를 Next.js 환경으로 변환
- `addPropertyControls` 대신 환경 변수 사용
- 클라이언트 사이드 렌더링 (`'use client'`) 적용
- 동적 임포트로 성능 최적화

## 🔒 보안

- JWT 토큰 기반 인증
- 환경 변수로 API URL 관리
- 로컬 스토리지에 토큰 저장