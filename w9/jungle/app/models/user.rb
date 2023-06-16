class User < ActiveRecord::Base
  def self.authenticate_with_credentials (email, password)
    email_sanitized = email.downcase.strip
    @user = User.find_by_email(email_sanitized)
    
    if @user && @user.authenticate(password)
      @user
    else
      nil
    end
  end

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: {minimum: 6}
  validates :password_confirmation, presence: true
  has_secure_password
end
