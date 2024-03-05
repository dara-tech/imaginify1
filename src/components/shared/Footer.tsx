import { BsFacebook, BsLinkedin, BsTwitter, BsGithub, BsTelegram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='border'>
      <div className='container mx-auto py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h4 className='text-lg font-semibold mb-4'>About</h4>
            <ul className='space-y-2'>
              <li>
                <a href='https://findanyimage.netlify.app/page.html' target='_blank' rel='noopener noreferrer'>Find Any Image</a>
              </li>
              <li>
                <a href='https://findanyimage.netlify.app/removebg.html' target='_blank' rel='noopener noreferrer'>Remove Background Images</a>
              </li>
              <li>
                <a href='https://findanyimage.netlify.app/resume.html' target='_blank' rel='noopener noreferrer'>Resume Builder</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Follow us</h4>
            <ul className='space-y-2'>
              <li>
                <a href='https://www.github.com/dara-tech' target='_blank' rel='noopener noreferrer'>GitHub</a>
              </li>
              <li>Discord</li>
              <li>
                <a href='https://daracheol.netlify.app' target='_blank' rel='noopener noreferrer'>Portfolio</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Legal</h4>
            <ul className='space-y-2'>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>References</li>
            </ul>
          </div>
        </div>
        <hr className='my-8' />
        <div className='flex items-center justify-between'>
          <p className='text-sm text-gray-600'>© {new Date().getFullYear()} Sovandara's blog</p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

const SocialLinks = () => {
  return (
    <div className='flex space-x-4'>
      <a href='https://www.facebook.com/profile.php?id=100005683637175&mibextid=dGKdO6' target='_blank' rel='noopener noreferrer'>
        <BsFacebook className='text-2xl' />
      </a>
      <a href='https://www.linkedin.com/in/sovandara-choel-a44a712a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank' rel='noopener noreferrer'>
        <BsLinkedin className='text-2xl' />
      </a>
      <a href='#'>
        <BsTwitter className='text-2xl' />
      </a>
      <a href='https://www.github.com/dara-tech' target='_blank' rel='noopener noreferrer'>
        <BsGithub className='text-2xl' />
      </a>
      <a href='https://t.me/vanlrn' target='_blank' rel='noopener noreferrer'>
        <BsTelegram className='text-2xl' />
      </a>
    </div>
  );
};

export default Footer;
