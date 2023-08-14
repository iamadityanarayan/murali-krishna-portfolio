import './sectionTitle.scss';

type Props = {
  title: string;
}
const SectionTitle = ({title}: Props) => {
  return (
    <span className="section-heading px-3 px-lg-0">{title}</span>
  )
}

export default SectionTitle