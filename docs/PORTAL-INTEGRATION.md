# AltekNetworks Customer Portal Integration

The public website includes a **Portal Login** button in the header, hero and footer. It redirects to:

`https://portal.alteknetworks.com`

## Intended portal workflow

1. AltekNetworks Admin creates/registers a customer account.
2. Admin provides the customer with the generated login credentials or activation link.
3. Customer signs in at `portal.alteknetworks.com`.
4. Customer can raise, view and track support tickets.
5. Admin/support staff can manage customers, tickets, priorities, status and responses.

## Recommended AWS deployment

The GitHub Pages website is static and does **not** store customer passwords or ticket data. The customer portal should be deployed separately on AWS, for example:

- Route 53 / DNS: `portal.alteknetworks.com`
- CloudFront + S3 or Amplify for the portal frontend
- API Gateway + Lambda or ECS for the portal API
- Amazon Cognito for customer/admin authentication
- Amazon RDS PostgreSQL or Aurora PostgreSQL for ticket/customer data
- SES for account invitations, password reset and ticket notifications
- CloudWatch for logs and monitoring

### Security requirements

- Do not store plaintext passwords.
- Use Cognito or a properly managed password-hashing system.
- Enforce HTTPS.
- Use separate Admin and Customer roles.
- Restrict ticket access by customer account/organisation.
- Enable MFA for administrators.
- Keep secrets in AWS Secrets Manager or SSM Parameter Store.

The public website is ready to deploy independently. AWS environment details are only required when deploying/configuring the portal backend and DNS.
