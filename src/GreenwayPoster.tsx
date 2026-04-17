import { useState } from 'react';
import './GreenwayPoster.css';

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
  companyTagline?: string;
  branch?: string;
  hiringLabel?: string;
  positionPrefix?: string;
  positionHighlight?: string;
  logoSrc?: string;
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
};

const defaultHighlights: HighlightItem[] = [
  {
    title: 'Quản lý kho',
    description: 'Kiểm soát nhập - xuất - tồn kho nguyên vật liệu, phụ tùng xe',
    featured: true,
  },
  {
    title: 'Thu chi nội bộ',
    description: 'Theo dõi dòng tiền, hạch toán thu/chi, quỹ tiền mặt hàng ngày',
    featured: true,
  },
  {
    title: 'Xuất hoá đơn',
    description: 'Lập & quản lý hoá đơn bán xe, dịch vụ, phụ kiện đúng quy định',
    featured: true,
  },
  {
    title: 'Báo cáo nội bộ',
    description: 'Lập báo cáo nhập - xuất - tồn, chi phí, công nợ theo yêu cầu',
  },
];

const defaultMeta = ['1-2 năm kinh nghiệm', 'Cao đẳng / Đại học', 'Full-time'];

const defaultBenefits = ['BHXH đầy đủ', 'Nghỉ 2 Thứ 7 / tháng', 'Lộ trình thăng tiến'];

const defaultRequirements: RequirementItem[] = [
  {
    emphasis: 'Tối thiểu 1 năm',
    text: ' kinh nghiệm kế toán tổng hợp / nội bộ',
  },
  {
    emphasis: 'Excel & phần mềm Misa',
    prefix: 'Thành thạo ',
  },
  {
    emphasis: 'kho, nguyên vật liệu, giá vốn',
    prefix: 'Có kinh nghiệm ',
    text: ' là lợi thế',
  },
  {
    emphasis: 'có trách nhiệm',
    prefix: 'Trung thực, cẩn thận, ',
    text: ' trong công việc',
  },
];

function LogoFallback() {
  return (
    <svg viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <circle cx="26" cy="26" r="20" stroke="#2d5e3a" strokeWidth="1.5" />
      <path
        d="M14 32 Q18 16 26 26 Q34 16 38 32"
        stroke="#6bbf85"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function GreenwayPoster({
  companyName = 'Greenway Automotives',
  companyTagline = 'Luxury Cars · Services',
  branch = 'CN Nam Sài Gòn',
  hiringLabel = 'Đang tuyển',
  positionPrefix = 'Kế Toán',
  positionHighlight = 'Nội Bộ',
  logoSrc = 'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/480888240_122174963456274970_7641727430567722685_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=XRfZ4mX3aK0Q7kNvwFVUTnZ&_nc_oc=AdqlPw5CUySgqA8DGt8d7u4teWLP1PZ7XM1D4oTO2oHV7X5VfITkP8k3pN7FcNXSrm9SHXW5Ix-X2vsy51f_GTTV&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=SrcnsZUgzJGOsFAqglantw&_nc_ss=7a389&oh=00_Af2IDmZ-z0nAJVclzkewru_F_mDiUObUkIBYVf5F36P7oQ&oe=69E77105',
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
  website = 'greenwayauto.vn',
}: GreenwayPosterProps) {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="pw">
      <div className="p">
        <div className="ph">
          <div className="lr">
            <div className="lbox">
              {logoSrc && !logoError ? (
                <img src={logoSrc} alt={`${companyName} logo`} onError={() => setLogoError(true)} />
              ) : (
                <LogoFallback />
              )}
            </div>
            <div className="bi">
              <div className="bn">{companyName}</div>
              <div className="bs">
                <span>{companyTagline}</span>
                <span className="branch-badge">{branch}</span>
              </div>
            </div>
            <div className="hb">{hiringLabel}</div>
          </div>

          <div className="pt">
            {positionPrefix} <strong>{positionHighlight}</strong>
          </div>

          <div className="pm">
            {meta.map((item) => (
              <div className="mc" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="pb">
          <div className="sl">{sectionLabel}</div>
          <div className="dg">
            {highlights.map((item) => (
              <div className={`di${item.featured ? ' hi' : ''}`} key={item.title}>
                <div className="dt">{item.title}</div>
                <div className="dd">{item.description}</div>
              </div>
            ))}
          </div>

          <div className="dl" />

          <div className="sb">
            <div>
              <div className="sal">{salaryLabel}</div>
              <div>
                <span className="sam">{salary}</span>
                <span className="sau">{salaryUnit}</span>
              </div>
            </div>
            <div className="br2">
              {benefits.map((benefit) => (
                <div className="bt" key={benefit}>
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="sl">{requirementLabel}</div>
          <div className="rl">
            {requirements.map((item, index) => (
              <div className="ri" key={`${item.emphasis}-${index}`}>
                <div className="rd" />
                <div className="rt">
                  {item.prefix}
                  <span>{item.emphasis}</span>
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pf">
          <div>
            <div className="cl">{contactLabel}</div>
            <div className="ce">{contactEmail}</div>
          </div>
          <div className="lb">
            <div className="lm">{schedule}</div>
            <div className="ls">{website}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
