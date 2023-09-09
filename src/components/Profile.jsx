import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!props.user) {
        navigate("/login");
      } else {
        const rsp = await axios
          .get(`http://localhost:3001/users/${props.user.email}`)
          .then((res) => res.data)
          .catch((err) => console.log(err));

        setData(rsp?.user);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return null;

  return (
    <div>
      <h1>Profile</h1>
      <p>{data.About}</p>
      <p>{data.City}</p>
      <p>{data.CompanyName}</p>
      <p>{data.ContactNumber}</p>
      <p>{data.Country}</p>
      <p>{data.Email}</p>
      <p>{data.FaceBook}</p>
      <p>{data.FirstName}</p>
      <p>{data.JobTitle}</p>
      <p>{data.LastName}</p>
      <p>{data.LinkedIn}</p>
      <p>{data.PostCode}</p>
      <p>{data.Premium}</p>
      <p>{data.State}</p>
      <p>{data.StreetAddress}</p>
      <p>{data.Website}</p>
      <img src={data.ProfilePic} />
      <img src={data.CoverPic} />
    </div>
  );
};

export default Profile;
