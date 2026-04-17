import { useState } from 'react';

type HighlightItem = {
  title: string;
  description: string;
  featured?: boolean;
};

type RequirementItem = {
  emphasis: string;
  prefix?: string;
  text?: string;
};

type GreenwayPosterProps = {
  companyName?: string;
  companyDescription?: string;
  branch?: string;
  hiringLabel?: string;
  positionPrefix?: string;
  positionHighlight?: string;
  logoSrc?: string;
  heroImageSrc?: string;
  meta?: string[];
  sectionLabel?: string;
  highlights?: HighlightItem[];
  salaryLabel?: string;
  salary?: string;
  salaryUnit?: string;
  benefits?: string[];
  requirementLabel?: string;
  requirements?: RequirementItem[];
  contactLabel?: string;
  contactEmail?: string;
  schedule?: string;
  website?: string;
  websiteUrl?: string;
  facebookUrl?: string;
  hotline?: string;
};

const defaultHighlights: HighlightItem[] = [
  {
    title: 'Quản lý kho',
    description: 'Kiểm soát nhập - xuất - tồn kho nguyên vật liệu, phụ tùng xe.',
    featured: true,
  },
  {
    title: 'Thu chi nội bộ',
    description: 'Theo dõi dòng tiền, hạch toán thu chi và quỹ tiền mặt hằng ngày.',
    featured: true,
  },
  {
    title: 'Xuất hoá đơn',
    description: 'Lập và quản lý hoá đơn bán xe, dịch vụ, phụ kiện đúng quy định.',
    featured: false,
  },
  {
    title: 'Báo cáo nội bộ',
    description: 'Tổng hợp báo cáo nhập xuất tồn, chi phí và công nợ theo yêu cầu.',
    featured: false,
  },
];

const defaultMeta = ['1-2 năm kinh nghiệm', 'Cao đẳng / Đại học', 'Full-time'];

const defaultBenefits = ['BHXH đầy đủ', 'Nghỉ 2 Thứ 7 / tháng', 'Lộ trình thăng tiến'];

const defaultRequirements: RequirementItem[] = [
  {
    emphasis: 'Tối thiểu 1 năm',
    text: ' kinh nghiệm kế toán tổng hợp hoặc nội bộ.',
  },
  {
    emphasis: 'Excel & phần mềm Misa',
    prefix: 'Thành thạo ',
  },
  {
    emphasis: 'kho, nguyên vật liệu, giá vốn',
    prefix: 'Có kinh nghiệm ',
    text: ' là lợi thế.',
  },
  {
    emphasis: 'có trách nhiệm',
    prefix: 'Trung thực, cẩn thận, ',
    text: ' trong công việc.',
  },
];

function LogoFallback() {
  return (
    <svg viewBox="0 0 52 52" fill="none" aria-hidden="true" className="h-full w-full">
      <circle cx="26" cy="26" r="20" stroke="#628954" strokeWidth="1.5" />
      <path
        d="M14 32 Q18 16 26 26 Q34 16 38 32"
        stroke="#a6d38d"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 12h17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M12 3c2.7 2.9 4.1 5.9 4.1 9S14.7 18.1 12 21c-2.7-2.9-4.1-5.9-4.1-9S9.3 5.9 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M6.8 4.5h2.5l1.3 4-1.6 1.6a14.6 14.6 0 0 0 4.9 4.9l1.6-1.6 4 1.3v2.5c0 .8-.7 1.5-1.5 1.5A13.5 13.5 0 0 1 5.3 6c0-.8.7-1.5 1.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M12 20s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function GreenwayPoster({
  companyName = 'Greenway Automotives',
  companyDescription = 'Cơ hội dành cho ứng viên kế toán nội bộ phù hợp môi trường showroom xe sang và xưởng sửa xe: gọn gàng, chuẩn xác và phối hợp tốt cùng vận hành, kho phụ tùng và đội ngũ kinh doanh.',
  branch = 'CN Nam Sài Gòn',
  hiringLabel = 'Đang tuyển',
  positionPrefix = 'Kế Toán',
  positionHighlight = 'Nội Bộ',
  logoSrc = 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/480888240_122174963456274970_7641727430567722685_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=XRfZ4mX3aK0Q7kNvwFVUTnZ&_nc_oc=AdqlPw5CUySgqA8DGt8d7u4teWLP1PZ7XM1D4oTO2oHV7X5VfITkP8k3pN7FcNXSrm9SHXW5Ix-X2vsy51f_GTTV&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=SrcnsZUgzJGOsFAqglantw&_nc_ss=7a389&oh=00_Af2IDmZ-z0nAJVclzkewru_F_mDiUObUkIBYVf5F36P7oQ&oe=69E77105',
  heroImageSrc = 'https://greenwayauto.vn/wp-content/uploads/2025/01/488344490_122190118672274970_1574180354739212513_n-1024x576.jpg',
  meta = defaultMeta,
  sectionLabel = 'Trọng tâm công việc',
  highlights = defaultHighlights,
  salaryLabel = 'Mức lương',
  salary = '12 - 13 tr',
  salaryUnit = 'VNĐ/tháng (Gross)',
  benefits = defaultBenefits,
  requirementLabel = 'Yêu cầu',
  requirements = defaultRequirements,
  contactLabel = 'Gửi CV về',
  contactEmail = 'nhu.ntq@greenwayauto.vn',
  schedule = 'Thứ 2 - Thứ 7 · 09:00 - 18:00',
  website = 'https://greenwayauto.vn',
  websiteUrl = 'https://greenwayauto.vn',
  facebookUrl = 'https://www.facebook.com/p/GreenWay-Automotives-61558249122563/',
  hotline = '0858 646 566',
}: GreenwayPosterProps) {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="w-full">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImageSrc}
            alt={`${companyName} showroom`}
            className="h-full w-full object-cover opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(166,203,132,0.12),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,24,19,0.7)_0%,rgba(20,26,21,0.82)_50%,#131814_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,24,20,0.84)_0%,rgba(19,24,20,0.6)_55%,rgba(19,24,20,0.8)_100%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[82svh] w-full max-w-[1360px] flex-col px-5 pb-6 pt-5 sm:min-h-[88svh] sm:px-8 sm:pb-12 sm:pt-7 lg:px-12 lg:pt-9">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-center gap-4">
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-[16px]">
                {logoSrc && !logoError ? (
                  <img
                    src={logoSrc}
                    alt={`${companyName} logo`}
                    onError={() => setLogoError(true)}
                    className="h-full w-full rounded-[16px] object-cover"
                  />
                ) : (
                  <LogoFallback />
                )}
              </div>

              <div className="min-w-0">
                <div className="truncate text-[0.76rem] font-semibold uppercase tracking-[0.34em] text-[var(--brand-accent-soft)]">
                  {companyName}
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.72rem] uppercase tracking-[0.22em] text-[var(--brand-muted)]">
                  <span className="text-[var(--brand-accent)]">{branch}</span>
                </div>
              </div>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="rounded-full bg-[#233a27] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--brand-accent)]">
                {hiringLabel}
              </span>
              <a
                href={websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/5 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-copy)] transition hover:bg-white/10"
              >
                Website
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/5 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-copy)] transition hover:bg-white/10"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="grid flex-1 items-center gap-6 py-6 sm:gap-8 sm:py-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.76fr)] lg:py-10">
            <div className="max-w-[820px]">
              <div className="mb-3 overflow-x-auto pb-1 text-[0.58rem] font-semibold uppercase tracking-[0.26em] whitespace-nowrap text-[var(--brand-accent)] sm:mb-4 sm:text-[0.76rem] sm:tracking-[0.36em]">
                Tuyển dụng showroom xe sang và xưởng sửa xe
              </div>

              <h1
                className="text-[clamp(2.2rem,8.2vw,6.2rem)] leading-[0.92] font-semibold tracking-[-0.035em] whitespace-nowrap text-[#f4f6ef]"
                style={{ fontFamily: "'Noto Serif Display', serif" }}
              >
                {positionPrefix} <span className="text-[var(--brand-accent-soft)]">{positionHighlight}</span>
              </h1>

              <p className="mt-4 max-w-[54ch] text-[0.92rem] leading-6 text-[var(--brand-copy)]/82 sm:mt-5 sm:text-[1rem] sm:leading-7">
                {companyDescription}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-2.5">
                {meta.map((item) => (
                  <div
                    key={item}
                    className="rounded-full bg-white/[0.045] px-3 py-1.5 text-[0.76rem] font-medium whitespace-nowrap text-[var(--brand-copy)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] sm:px-4 sm:py-2 sm:text-[0.82rem]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3 sm:hidden">
                <span className="rounded-full bg-[#233a27] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--brand-accent)]">
                  {hiringLabel}
                </span>
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/5 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-copy)]"
                >
                  Website
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/5 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-copy)]"
                >
                  Facebook
                </a>
              </div>
            </div>

            <div className="w-full justify-self-start lg:max-w-[380px] lg:justify-self-end">
              <div className="relative w-full rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.16)] ring-1 ring-white/7 backdrop-blur-md sm:p-6">
                <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(184,216,165,0.8),transparent)]" />
                <div className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--brand-muted)]">
                  {salaryLabel}
                </div>
                <div
                  className="mt-2 text-[2rem] font-semibold whitespace-nowrap text-[var(--brand-accent-soft)] sm:text-[2.8rem]"
                  style={{ fontFamily: "'Noto Serif Display', serif" }}
                >
                  {salary}
                </div>
                <div className="mt-1 text-[0.86rem] whitespace-nowrap text-[var(--brand-copy)]/74 sm:text-[0.92rem]">{salaryUnit}</div>

                <div className="mt-4 h-px bg-white/8 sm:mt-5" />

                <div className="mt-4 space-y-1.5 text-[0.88rem] leading-6 text-[var(--brand-copy)]/84 sm:mt-5 sm:text-[0.95rem] sm:leading-7">
                  <div>{schedule}</div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:mt-5">
                  {benefits.map((benefit, index) => (
                    <div
                      key={benefit}
                      className={`flex items-center justify-center gap-2 rounded-full px-3 py-2.5 text-center text-[0.78rem] font-semibold whitespace-nowrap sm:text-[0.84rem] ${
                        index === 0
                          ? 'bg-[linear-gradient(90deg,rgba(166,203,132,0.3),rgba(166,203,132,0.1))] text-[#f3f8ec] shadow-[inset_0_0_0_1px_rgba(184,216,165,0.16)]'
                          : 'bg-[linear-gradient(90deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] text-[var(--brand-copy)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]'
                      }`}
                    >
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-[0.78rem]">
                        {index === 0 ? '✦' : index === 1 ? '◦' : '↗'}
                      </span>
                      {benefit}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1360px] px-5 pb-8 sm:px-8 sm:pb-12 lg:px-12">
        <div className="rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] ring-1 ring-white/6 backdrop-blur-md sm:p-7 lg:p-8">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1.02fr)_minmax(300px,0.78fr)] lg:gap-10">
            <div>
              <div className="text-[0.74rem] font-semibold uppercase tracking-[0.34em] text-[var(--brand-accent)]">
                {sectionLabel}
              </div>

              <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-3.5">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-[24px] p-4 sm:p-5 ${item.featured ? 'bg-[linear-gradient(180deg,rgba(166,203,132,0.1),rgba(255,255,255,0.018))]' : 'bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]'}`}
                  >
                    <div className="text-[1.02rem] font-semibold text-[#eff7e9]">{item.title}</div>
                    <div className="mt-2 text-[0.9rem] leading-6 text-[var(--brand-copy)]/74 sm:text-[0.95rem] sm:leading-7">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[26px] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-5 ring-1 ring-white/5 sm:p-6">
              <div className="text-[0.74rem] font-semibold uppercase tracking-[0.34em] text-[var(--brand-accent)]">
                {requirementLabel}
              </div>

              <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                {requirements.map((item, index) => (
                  <div key={`${item.emphasis}-${index}`} className="border-b border-white/7 pb-3 sm:pb-4">
                    <div className="text-[0.95rem] leading-7 text-[var(--brand-copy)]/82 sm:text-[1rem] sm:leading-8">
                      {item.prefix}
                      <span className="font-semibold text-[#f2f6ee]">{item.emphasis}</span>
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] sm:mt-7" />

          <div className="mt-5 grid gap-4 lg:mt-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-5">
            <div>
              <div className="text-[0.74rem] uppercase tracking-[0.3em] text-[var(--brand-muted)]">
                {contactLabel}
              </div>
              <div className="mt-2 flex items-center gap-2 text-[1rem] font-semibold text-[var(--brand-accent-soft)] sm:text-[1.45rem]">
                <MailIcon />
                <span className="truncate">{contactEmail}</span>
              </div>
              <div className="mt-2 max-w-[54ch] text-[0.88rem] leading-6 text-[var(--brand-copy)]/72 sm:mt-3 sm:text-[0.94rem] sm:leading-7">
                Ứng viên phù hợp sẽ có lợi thế khi yêu thích môi trường showroom, làm việc chỉn chu, theo số liệu sát và phối hợp tốt với bán hàng, dịch vụ và kho phụ tùng.
              </div>
            </div>

            <div className="grid gap-2 text-[0.84rem] text-[var(--brand-copy)]/82 sm:text-[0.9rem] lg:justify-items-end">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <PhoneIcon />
                <span>{hotline}</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <PinIcon />
                <span>{branch}</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <GlobeIcon />
                <span>{website}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
