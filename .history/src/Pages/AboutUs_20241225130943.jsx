import {
  Grid,
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { useState } from "react";


const LeaderShip = [
  {
    image: "/Elder Dan.jpg",
    name: "Pastor John Doe",
    title: "Senior Pastor",
    description:
      "Pastor John has been leading the church since [YEAR], with a focus on [specific focus or ministry].",
  },
  {
    image: "/Elder Banor.jpg",
    name: "Elder Jane Smith",
    title: "Elder",
    description:
      "Elder Jane brings a wealth of experience in [specific area], serving the church faithfully since [YEAR].",
  },
  {
    image: "/Elder Ashanti.jpg",
    name: "Deacon Peter Brown",
    title: "Deacon",
    description:
      "Deacon Peter oversees [responsibility], ensuring smooth operations and member engagement.",
  },
];

const memberShip = [
  {
    image: "/member1.jpg",
    name: "Member One",
    title: "Member Title",
    description: "Description about the member goes here.",
  },
  {
    image: "/member2.jpg",
    name: "Member Two",
    title: "Member Title",
    description: "Description about the member goes here.",
  },
  {
    image: "public/member2.jpg",
    name: "Member Three",
    title: "Member Title",
    description: "Description about the member goes here.",
  },
];



const AboutUs = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage("");
  };

  return (
    <Box className="bg-gray-100 pt-24 p-5 min-h-screen">
      <div className="w-full max-w-full h-screen relative overflow-hidden  mt-24 px-10 py-10">
        <img
          src="/aboutUs.png"
          alt="announcement image"
          className="w-full h-full rounded-3xl object-cover"
        />
      </div>

      <section className="mb-10 flex flex-col gap-5">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          className="text-blue-700"
        >
          History of the Church
        </Typography>
        <Typography variant="body1" color="textPrimary" paragraph>
          The Church of Pentecost began its mission in [YEAR], spreading the
          gospel and impacting communities across the globe. Over the years, it
          has grown into a dynamic movement with a rich history of faith,
          service, and dedication to the teachings of Christ.
        </Typography>
        <Typography variant="body1" color="textPrimary" paragraph>
          Milestones include [important event 1], [important event 2], and the
          establishment of [key achievement].
        </Typography>
      </section>

      <section className="mb-10 flex flex-col gap-10">
        <h2 className="text-2xl font-bold text-blue-700">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
          {LeaderShip.map((leader, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-center"
              onClick={() => handleOpenModal(leader.image)}
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-60 h-60 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-blue-700">{leader.name}</h3>
              <p className="text-gray-500">{leader.title}</p>
              <p className="text-gray-700 mt-2">{leader.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 flex flex-col gap-5">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          className="text-blue-700"
        >
          Core Beliefs and Doctrines
        </Typography>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="mb-2">
            We believe in the triune God: the Father, the Son, and the Holy
            Spirit.
          </li>
          <li className="mb-2">
            We uphold the Bible as the inspired and infallible Word of God.
          </li>
          <li className="mb-2">
            Salvation is through faith in Jesus Christ, by grace, and not by
            works.
          </li>
          <li className="mb-2">
            The Church is called to evangelize the world and demonstrate the
            love of Christ.
          </li>
          <li className="mb-2">
            We value prayer, worship, and fellowship as essential elements of
            the Christian life.
          </li>
        </ul>
      </section>

      <section className="mb-10 flex flex-col gap-20">
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          gutterBottom
          className="text-blue-700 "
        >
          Statistics
        </Typography>
        <Grid container justifyContent="center" spacing={8}>
          {membersStatistics.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index} className="text-center">
              <Box className="w-36 h-36 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center mx-auto">
                <Typography variant="h5" fontWeight="bold">
                  {stat.count}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                color="textPrimary"
                className="mt-2 font-medium text-2xl"
              >
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </section>

      <section className="mb-10 flex flex-col gap-20">
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          className="text-blue-700"
          gutterBottom
        >
          Meet Our Members
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
          {memberShip.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg text-center"
            >
              <div
                className="w-80 h-50 mx-auto mb-4 flex items-center justify-center rounded-full overflow-hidden"
                onClick={() => handleOpenModal(member.image)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-60 h-60 mx-auto rounded-full mb-4 object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-blue-700">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
              <p className="text-gray-700 mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Leadership Image</DialogTitle>
        <DialogContent>
          <img
            src={selectedImage}
            alt="Leadership"
            className="w-full h-auto object-contain"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Membership Image</DialogTitle>
        <DialogContent>
          <img
            src={selectedImage}
            alt="membership"
            className="w-full h-auto object-contain"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AboutUs;
