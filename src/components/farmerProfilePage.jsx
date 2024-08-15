import { useParams } from "react-router-dom";
import FarmerProfile from "../pages/farmerProfile";
import farmersList from "../assets/data/farmersList";

const FarmerProfilePage = () => {
  const params = useParams();
  return <FarmerProfile farmer={farmersList[params.userId - 1]} />;
};

export default FarmerProfilePage;
