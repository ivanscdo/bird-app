module.exports = {
	google: {
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET
	},
	session: {
		cookieKey: process.env.SESSION_COOKIE_KEY
	}, 
	google_cloud_bucket_name: process.env.GCS_BUCKET_NAME, 
	google_vision_key: process.env.GOOGLE_VISION_KEY
};