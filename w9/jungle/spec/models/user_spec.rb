require 'rails_helper'

RSpec.describe User, type: :model do
  before(:each) do
    @user = User.new(
        first_name: "Josh",
        last_name: "T",
        email: "test@test.COM",
        password: "123abc",
        password_confirmation: "123abc"
      )
  end
  
  describe 'Validations' do
 
    it "Should have one user being created" do 
      expect(@user).to be_valid()
    end

    it "Should have a first name feild" do 
      @user.first_name = nil
      expect(@user).to_not be_valid()
    end

    it "Should have a last name feild" do 
      @user.last_name = nil
      expect(@user).to_not be_valid()
    end

    it "Should have an email feild" do 
      @user.email = nil
      expect(@user).to_not be_valid()
    end

    it "Should have a password feild" do 
      @user.password = nil
      expect(@user).to_not be_valid()
    end

    it "Should have a password confirmation feild" do 
      @user.password_confirmation = nil
      expect(@user).to_not be_valid()
    end

    it "Should require a password and password confirmation feild that match" do 
      @user.password = "123abc"
      @user.password_confirmation = "123bca"
      expect(@user).to_not be_valid()
    end



    it "Should only allow unique emails in the database (cASe_SeNSitIvE)" do 
      @user2 = User.create!(
        first_name: "Josh",
        last_name: "T",
        email: "test@TEST.COM",
        password: "123abc",
        password_confirmation: "123abc"
      )
      @user3 = User.new(
        first_name: "Josh",
        last_name: "T",
        email: "TEST@TEST.COM",
        password: "123abc",
        password_confirmation: "123abc"
      )

      expect(@user3).to_not be_valid()
    end

    it "Should only allow unique emails in the database (cASe_SeNSitIvE)" do 
      @user.password = "123ab"
      @user.password_confirmation = "123ab"
      expect(@user).to_not be_valid()
    end
  end

  describe '.authenticate_with_credentials' do
    it "Should authenticate and return user" do 
      @user2 = User.new(
        first_name: "Josh",
        last_name: "T",
        email: "test@test.com",
        password: "123abc",
        password_confirmation: "123abc"
      )
      @user2.save

      @user_copy = User.authenticate_with_credentials("test@TEST.COM",  "123abc")
      expect(@user_copy).not_to be(nil)
    end

    it "Should not authenticate and return nil" do 
      @user2 = User.create!(
        first_name: "Josh",
        last_name: "T",
        email: "test@TEST.COM",
        password: "123abc",
        password_confirmation: "123abc"
      )

      @user_copy = User.authenticate_with_credentials(@user2.email, "asdfasdf")
      expect(@user_copy).to eq(nil)
    end

    it "Should check for trailing white spaces in email" do 
      @user2 = User.create!(
        first_name: "Josh",
        last_name: "T",
        email: "test@test.COM",
        password: "123abc",
        password_confirmation: "123abc"
      )

      @email = " test@TEST.COM "
      @user_copy = User.authenticate_with_credentials(@email, @user2.password)
      expect(@user_copy).not_to eq(@user2)
    end

    it "Should authenticate user if email casing is wrong" do 
      @user2 = User.create!(
        first_name: "Josh",
        last_name: "T",
        email: "test@test.com",
        password: "123abc",
        password_confirmation: "123abc"
      )

      @email = " test@TESt.COM "
      @user_copy = User.authenticate_with_credentials(@email, @user2.password)
      expect(@user_copy.email).to eq(@user2.email)
    end

   
  end
end

# def user_params
#   params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
# end