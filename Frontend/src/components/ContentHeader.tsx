interface HeaderProperties {
  title: string
  subtitle: string
}

const ContentHeader = ({ title, subtitle }: HeaderProperties) => {
  return (
    <section className="inline-flex items-end mt-2 ml-3">
      <span className="text-2xl">{title}</span>
      <small id="version-number" className="text-lg text-end ml-2 text-gray-500" >{subtitle}</small>
    </section>
  )
}

export default ContentHeader