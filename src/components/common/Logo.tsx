import { Globe } from "lucide-react";

/**
 * 재사용 가능한 로고 컴포넌트
 * @param href - 로고 클릭 시 이동할 링크 (없으면 링크 없이 렌더링)
 * @param size - 로고 크기: 'sm' | 'md' | 'lg' (기본값: 'md')
 * @param className - 추가 커스텀 클래스
 */
export interface LogoProps {
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { icon: "w-5 h-5" },
  md: { icon: "w-8 h-8" },
  lg: { icon: "w-12 h-12" },
};

export default function Logo({ href, size = "md", className = "" }: LogoProps) {
  const iconClass = sizeMap[size]?.icon || sizeMap.md.icon;
  const baseClass = `flex items-center gap-2 ${className}`;

  return (
    <>
      {href ? (
        <a href={href} className={baseClass}>
          <LogoContent iconClass={iconClass} />
        </a>
      ) : (
        <span className={baseClass}>
          <LogoContent iconClass={iconClass} />
        </span>
      )}
    </>
  );
}

function LogoContent({ iconClass }: { iconClass: string }) {
  return (
    <>
      <Globe className={`${iconClass} text-primary`} />
      <span className="font-bold hidden sm:inline">Company</span>
    </>
  );
}
