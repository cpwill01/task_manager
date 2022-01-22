import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];
    const isCustomAuth = token ? token.length < 500 : null;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");
      req.userId = decodedData?.id;
    } else if (token) {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub; //Google's unique id for each user
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
