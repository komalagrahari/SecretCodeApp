class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
           has_one :secret_code
           enum role: {User: 0, Admin: 1}
   attr_accessor :code_string

   before_create :save_default


   def save_default
   	self.secret_code = SecretCode.find_by(code_string: self.code_string)
self.code_string
   	puts "hello ======================================="
   	puts self.secret_code
   end
end
