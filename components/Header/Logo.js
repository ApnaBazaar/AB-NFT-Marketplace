import Image from 'next/image'

const style = {
  wrapper: `flex cursor-pointer items-center space-x-3`,
  svgText: ` font-bold text-4xl h-14 w-24 fill-[#04111D] pt-1 dark:fill-white`,
}

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Image src='/logo.svg' width={40} height={40} />
      <div className={style.svgText}>
      ApnaBazaar
      </div>
    </div>
  )
}

export default Logo
