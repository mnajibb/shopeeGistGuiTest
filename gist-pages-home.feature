Feature: As a user, I want see my gist

@desktop @gist @clear @quit
Scenario: As a user, I want to create a public gist
  Given user is at gist home page
  When User click New gist
    And User insert Gist description
    And User insert file name include extension
    And User insert body file
    And User click Create public gist
  Then User will see new created gist listed

@desktop @gist @clear @quit
Scenario: As a user, I should not be able to create a public gist because body is still empty
  Given user is at gist home page
  When User click New gist
    And User insert Gist description
    And User insert file name include extension
    And User click Create public gist
  Then User can not be create new gist and the button is still not visible

@desktop @gist @clear @quit
Scenario: As a User, I should be able to see all of my gists
  Given user is at gist home page
  When User click New gist
    And User click see all of your gists
  Then All of user gist should be shown

@desktop @gist @clear @quit
Scenario: As a User, I want to edit an existing gists
  Given user is at gist home page
  When User click New gist
    And User click see all of your gists
    And User click one of selected created gist
    And User click edit
    And User edited selected body
    And User click Update public gist
  Then User will see updated gist shown

@desktop @gist @clear @quit
Scenario: As a User, I want to delete an existing gists
  Given user is at gist home page
  When User click New gist
    And User click see all of your gists
    And User click one of selected created gist
    And User click delete
  Then User current git should be deleted