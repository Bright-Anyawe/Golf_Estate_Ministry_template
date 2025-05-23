import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";


const Contact = () => {


const handleSubmit = async (e) => {
   const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "" });
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(e.target),
      });

      const data = await response.json();

      if (data.success) {
        setFormValues({ name: "", email: "", message: "" });
        setSnackbar({
          open: true,
          message: "Form submitted successfully!",
          severity: "success",
        });
      } else {
        setSnackbar({
          open: true,
          message: "There was an issue submitting the form. Please try again.",
          severity: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSnackbar({
        open: true,
        message: "There was an error submitting the form. Please try again.",
        severity: "error",
      });
    }
  }


  return (
    <>
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-500 opacity-50 z-10"></div>
        <img
          src="/congregation.jpg"
          alt="congregation"
          className="w-full h-full object-cover rounded-3xl shadow-lg"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <Typography
            variant="h1"
            className="text-white font-extrabold text-4xl sm:text-3xl md:text-6xl lg:text-7xl text-center leading-tight px-4 sm:px-8"
          >
            Contact Us
          </Typography>
        </div>
      </div>

      <Box className="container mx-auto p-8">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="font-bold text-blue-600 mb-10"
        >
          Contact Us
        </Typography>

        <Box className="bg-gradient-to-r from-blue-100 to-white p-8 rounded-lg shadow-lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                className="text-2xl font-semibold text-gray-800 mb-6"
              >
                Send Us a Message
              </Typography>
              <form
                className="space-y-6"
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="ec323071-c9a1-48e4-9bba-87c32ecc2b27"
                />

                <TextField
                  label="Name"
                  name="name"
                  value={formValues.name}
                  onChange={(e) =>
                    setFormValues({ ...formValues, name: e.target.value })
                  }
                  variant="outlined"
                  fullWidth
                  required
                  className="mb-4"
                />
                <TextField
                  label="Email"
                  name="email"
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({ ...formValues, email: e.target.value })
                  }
                  variant="outlined"
                  type="email"
                  fullWidth
                  required
                  className="mb-4"
                />
                <TextField
                  label="Message"
                  name="message"
                  value={formValues.message}
                  onChange={(e) =>
                    setFormValues({ ...formValues, message: e.target.value })
                  }
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  className="mb-4"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="py-3 rounded-lg"
                >
                  Send Message
                </Button>
              </form>
            </Grid>
            {/* Contact Information */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                className="text-2xl font-semibold text-gray-800 mb-6"
              >
                Get in Touch
              </Typography>
              <Typography className="mb-4 text-gray-600">
                <strong>Phone:</strong> 0594172522
              </Typography>
              <Typography className="mb-4 text-gray-600">
                <strong>Email:</strong> info@golfestateassembly.com
              </Typography>
              <Typography className="mb-6 text-gray-600">
                <strong>Office Hours:</strong> Mon - Fri, 9 AM - 5 PM
              </Typography>

              {/* Social Media */}
              <Typography className="text-lg font-semibold text-gray-800 mb-4">
                Follow Us
              </Typography>
              <div className="flex space-x-6 text-gray-500">
                <a
                  href="https://web.facebook.com/people/COP-Golf-Estate-Assembly/61561098698326/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition duration-300 transform hover:scale-110"
                >
                  <FacebookIcon fontSize="large" />
                </a>
                <a
                  href="https://twitter.com/churchofpentecost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition duration-300 transform hover:scale-110"
                >
                  <TwitterIcon fontSize="large" />
                </a>
                <a
                  href="https://instagram.com/churchofpentecost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition duration-300 transform hover:scale-110"
                >
                  <InstagramIcon fontSize="large" />
                </a>
                <a
                  href="https://youtube.com/churchofpentecost"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition duration-300 transform hover:scale-110"
                >
                  <YouTubeIcon fontSize="large" />
                </a>
              </div>
            </Grid>
          </Grid>
        </Box>

        {/* Map Section */}
        <Box className="mt-16">
          <Typography
            variant="h6"
            align="center"
            className="text-2xl font-semibold text-gray-800 mb-6"
          >
            Our Address
          </Typography>
          <Typography align="center" className="text-gray-600 mb-4">
            Golf Estate Assembly (COP)
          </Typography>
          <Typography align="center" className="text-gray-600 mb-4">
            123 Faith Avenue, Golf State, Ghana
          </Typography>
          <Typography align="center" className="text-gray-600 mb-4">
            ZIP Code: 12345
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093337!2d144.9630579153167!3d-37.8136279797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sChurch%20of%20Pentecost!5e0!3m2!1sen!2s!4v1688499486215!5m2!1sen!2s"
            width="100%"
            height="300"
            className="rounded shadow-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </>
  );
}
}

export default Contact;
