import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined';
import "../styles/socialLinks.css";

export default function socialLinks() {
    return (
        <div className="socialLinksContainer">
            <div>
                <WhatsAppIcon className="socialLink"/>
            </div>
            <div>
                <LocationOnIcon className="socialLink"/>
            </div>
            <div>
                <InstagramIcon className="socialLink"/>
            </div>
            <div>
                <EmailIcon className="socialLink"/>
            </div>
        </div>
    );
}