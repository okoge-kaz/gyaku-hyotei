import footer from './Footer.module.css'

const Footer = () => {
  return (
    <div className={footer.footer}>
        <div className={footer.contactus}>
          <a
            href="https://forms.gle/ZtJGJfxKadJ6VuAa8"
            target="_blank"
            rel="noreferrer"
            className={footer.contactusLink}
          >
            CONTACT US
          </a>
        </div>
        <div className={footer.copyright}>Copyright 2021 Titech Info</div>
      </div>
  )
}
export default Footer