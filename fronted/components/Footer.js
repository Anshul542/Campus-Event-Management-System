  import{Link}from 'react-router-dom'
   import './footer.css'
  function Footer() {
  return (
    <div className="footer-card">
      <div>
        <a
          className="a-links"
          href="https://www.facebook.com/nithamirpur/"
          target="_blank"
        >
          Facebook
        </a>
        <a
          className="a-links"
          href="https://www.instagram.com/nit_hamirpur/?hl=en "
          target="_blank"
        >
          Instagram
        </a>
        <a
          className="a-links"
          href="https://twitter.com/NITHamirpurHP?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
       target='_blank'  >
          Twitter
        </a>
        <a
          className="a-links"
          href="https://www.linkedin.com/school/national-institute-of-technology-hamirpur/?originalSubdomain=in"
        target='_blank' >
          Youtube
        </a>
        <a
          className="a-links"
          href="https://www.linkedin.com/school/national-institute-of-technology-hamirpur/?originalSubdomain=in"
        target='_blank' >
          Linkedin
        </a>
      </div>
      <div>
        {/* <Link
          className="a-links"
          to="https://jayvijaychauhan.github.io/nith-event-fronted/"
          target="_blank"
        >
          About Clubs
        </Link> */}
        <Link className="a-links" to="/contact">
          Contact
        </Link>
        <Link className="a-links" to="https://nith.ac.in/" target='_blank'>
          NIT Hamirpur
        </Link>
      </div>
    </div>
  );
}
 
 export default Footer ;
