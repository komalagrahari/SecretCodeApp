module ApplicationHelper
	def availabe_secret_code
     	SecretCode.where(user_id: nil).pluck(:code_string).join(", ")
end
end
