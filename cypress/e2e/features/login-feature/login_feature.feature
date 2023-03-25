Feature: Login feature for Insurance application of GURU99

    Login feature for Insurance application of GURU99

    Scenario: Login with correct email and password combination
        Given I have open the Insurance application
        When I enter 'kuamranrarr@gmail.com' as eamil and 'kuamranrarr' as passwrd
        And I click on login buton
        Then I am able to login to application