// export const config = {
//   username: process.env.POSTGRES_USERNAME,
//   password: process.env.POSTGRES_PASSWORD,
//   database: process.env.POSTGRES_DB,
//   host: process.env.POSTGRES_HOST,
//   dialect: "postgres",
//   aws_region: process.env.AWS_REGION,
//   aws_profile: process.env.AWS_PROFILE,
//   aws_media_bucket: process.env.AWS_BUCKET,
//   url: process.env.URL,
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
// };
export const config = {
  username: "postgres",
  password: "ABC123456",
  database: "postgres",
  host: "cdr.cou5hfyjgibx.eu-central-1.rds.amazonaws.com",
  dialect: "postgres",
  aws_region: "eu-central-1",
  aws_profile: "default",
  aws_media_bucket: "test-160305828277-dev",
  url: "http://localhost:8100",
  jwt: {
    secret: "ABC123456",
  },
};
