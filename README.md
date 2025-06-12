# React UI Kit (Vite + Storybook)

이 프로젝트는 다양한 서비스에서 재사용 가능한 **공통 UI 컴포넌트(Kit)**를 개발하고, Storybook을 통해 문서화 및 테스트를 용이하게 하기 위해 만들어졌습니다.

- 일관된 UI/UX 제공
- 컴포넌트 단위 개발 및 문서화
- 빠른 프론트엔드 개발 환경 구축

## 개발 서버 실행 방법

### 1. Vite 개발 서버 (UI Kit Playground)

```bash
pnpm dev
# 또는
npm run dev
```

- 접속: [http://localhost:5173](http://localhost:5173)

### 2. Storybook 서버 (컴포넌트 문서/테스트)

```bash
pnpm storybook
# 또는
npm run storybook
```

- 접속: [http://localhost:6006](http://localhost:6006)

## 참고

- 환경변수(`.env.development`)에서 `VITE_STORYBOOK_URL`을 설정하면 Storybook 링크가 자동으로 연결됩니다.
- 컴포넌트 추가/수정 시 `src/data/ui-components.ts`와 Storybook 스토리 파일을 함께 관리하세요.
