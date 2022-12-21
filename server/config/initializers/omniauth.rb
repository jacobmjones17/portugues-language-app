Rails.application.config.middleware.use OmniAuth::Builder do
    provider :facebook, "693543235541242", "a32d3f98c896ee7cf08901829e1c5d7c"
end