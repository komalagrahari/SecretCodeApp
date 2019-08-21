class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
           has_one :secret_code
           enum role: {User: 0, Admin: 1}
   attr_accessor :code_string
   has_one :secret_code
   after_create :save_default


   def save_default
   	SecretCode.find_by(code_string: self.code_string).update_column('user_id', self.id)
   end
end
