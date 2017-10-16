class WelcomeController < ApplicationController
  def index
  	@secret_code = current_user.secret_code.code_string
  end
end
