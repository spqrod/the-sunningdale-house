import "../styles/home.css";
import Button from "@mui/material/Button"
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <main className="homePage">
            <section className="heroSection">
                <h1 className="explanationHeaderForClient">Hero Section</h1>
                <p className="explanationTextForClient">This is the first thing users see. It will be a full screen section with a catchy short phrase which describes the business well, a beautiful photo in the background and a button for our target action.</p>
                <h1>Welcome To The Sunningdale House</h1>
                <h2>A place of peaceful rest and exquisite cousine in the heart of Lusaka</h2>
                <p>Beautiful photos in the background</p>
            </section>
            <section className="restaurantSection">
                <h1 className="explanationHeaderForClient">Restaurant Section</h1>
                <p className="explanationTextForClient">Here we will have a text about the restaurant, the chef, a gallery or slider with photos and a button that leads to the restaurant page.</p>
                <div className="restaurantPhotoContainer">
                    <PhotoOutlinedIcon sx={{fontSize: "300px"}} />
                </div>
                <div className="restaurantInfoContainer">
                    <h2>The Sunningdale House Restaurant</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint ut omnis voluptas beatae voluptatibus laboriosam, sed consequuntur. In, perferendis?</p>
                    <Button component={Link} to="/restaurant" variant="contained" size="large"
                            sx={{
                                backgroundColor: "white",
                                color: "black",
                                border: "1px solid black"
                            }}>See Our Menu
                    </Button>
                </div>
            </section>
            <section className="roomsSection">
                <h1 className="explanationHeaderForClient">Rooms Section</h1>
                <p className="explanationTextForClient">Here we will have a text about the hotel, room types, a gallery or slider with photos and a button that leads to the hotel page.</p>
                <div className="roomsInfoContainer">
                    <h2>The Sunningdale House Hotel</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint ut omnis voluptas beatae voluptatibus laboriosam, sed consequuntur. In, perferendis?</p>
                    <Button component={Link} to="/rooms" variant="contained" size="large" 
                            sx={{
                                backgroundColor: "white",
                                color: "black",
                                border: "1px solid black"
                            }}>See Our Rooms
                    </Button>
                </div>
                <div className="roomsPhotoContainer">
                    <PhotoOutlinedIcon sx={{fontSize: "300px"}} />
                </div>
            </section>
            <section className="reviewsSection">
                <h1 className="explanationHeaderForClient">Reviews Section</h1>
                <p className="explanationTextForClient">It's a social trust signal section – a very important part for conversions. It's best to have real reviews from Google here.</p>
                <h2>What Our Guests Say</h2>
                <div className="reviewsContainer">
                    <div className="reviewContainer">
                        <PersonIcon sx={{fontSize: "100px"}} />
                        <div className="reviewInfoContainer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque quas facere officiis quasi, assumenda doloremque, laborum in.</p><br></br>
                            <p>Arthur Conan Doyle</p>
                        </div>
                    </div>
                    <div className="reviewContainer">
                        <PersonIcon sx={{fontSize: "100px"}} />
                        <div className="reviewInfoContainer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque quas facere officiis quasi, assumenda doloremque, laborum in.</p><br></br>
                            <p>Winston Churchill</p>
                        </div>
                    </div>
                    <div className="reviewContainer">
                        <PersonIcon sx={{fontSize: "100px"}} />
                        <div className="reviewInfoContainer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque quas facere officiis quasi, assumenda doloremque, laborum in.</p><br></br>
                            <p>Mark Manson</p>
                        </div>
                    </div>
                    <div className="reviewContainer">
                        <PersonIcon sx={{fontSize: "100px"}} />
                        <div className="reviewInfoContainer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque quas facere officiis quasi, assumenda doloremque, laborum in.</p><br></br>
                            <p>William Shirer</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blogSection">
                <h1 className="explanationHeaderForClient">Blog Section</h1>
                <p className="explanationTextForClient">Here we showcase our blog posts. Clicking on an item takes you to the blog post page. A "Read more" button at the bottom takes to the main blog page.</p>
                <h2>Things To Do In Lusaka</h2>
                <div className="blogPostsContainer">
                    <div className="blogPostContainer">
                        <PhotoOutlinedIcon sx={{fontSize: "100px"}} />
                        <p className="blogPostName">Top 10 Places To Dine In Lusaka</p>
                    </div>
                    <div className="blogPostContainer">
                        <PhotoOutlinedIcon sx={{fontSize: "100px"}} />
                        <p className="blogPostName">Top 10 Places To Stay In Lusaka</p>
                    </div>
                    <div className="blogPostContainer">
                        <PhotoOutlinedIcon sx={{fontSize: "100px"}} />
                        <p className="blogPostName">Top Shopping Places In Lusaka</p>
                    </div>
                    <div className="blogPostContainer">
                        <PhotoOutlinedIcon sx={{fontSize: "100px"}} />
                        <p className="blogPostName">Top 10 Safaris In Lusaka</p>
                    </div>
                </div>
                <Button component={Link} to="/things-to-do-in-lusaka" variant="contained" size="large"
                            sx={{
                                backgroundColor: "white",
                                color: "black",
                                border: "1px solid black"
                            }}>Read More
                </Button>
            </section>
            
        </main>
    );
}