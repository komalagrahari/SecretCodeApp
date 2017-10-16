class SecretCode < ApplicationRecord
	belongs_to :user, optional: true
end
