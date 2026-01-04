import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONFIG } from "@/config";
import { useTheme } from "@/hooks/use-theme";
import { submit } from "@/lib/web3forms";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { CircleAlertIcon, CircleCheckIcon } from "lucide-react";
import { useRef, useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

const EMAIL_REGEX = /^\S+@\S+$/i;

export function ContactForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setValue,
  } = useForm({
    mode: "onTouched",
  });
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { actual } = useTheme();
  const captchaRef = useRef<HCaptcha>(null);

  const handleHCaptchaChange = (token: string) => {
    setValue("h-captcha-response", token);
  };

  const handleFormSubmit: SubmitHandler<FieldValues> = async (formData) => {
    try {
      const response = await submit(formData);

      if (response.success) {
        setIsSuccess(true);
        setResult("An email has been sent.");
        reset();
        captchaRef.current?.resetCaptcha();
      } else {
        setIsSuccess(false);
        setResult(response.message || "The form service experienced an error.");
      }
    } catch {
      setIsSuccess(false);
      setResult("There was an unexpected client error. Please try again.");
    }
  };

  return (
    <>
      {!isSubmitSuccessful && (
        <form onSubmit={(e) => void handleSubmit(handleFormSubmit)(e)}>
          <input type="hidden" value={CONFIG.WEB3FORMS_ACCESS_KEY} {...register("access_key")} />
          <input type="hidden" value="Contact Form" {...register("subject")} />
          <input type="hidden" value="christian.gg" {...register("from_name")} />
          <input type="checkbox" {...register("botcheck")} style={{ display: "none" }} />

          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  {...register("name", { required: "Name is required" })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                <div className="min-h-5">
                  {typeof errors.name?.message === "string" && (
                    <p className="text-palette-red text-sm">{errors.name.message}</p>
                  )}
                </div>
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: EMAIL_REGEX,
                      message: "Please enter a valid email",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                <div className="min-h-5">
                  {typeof errors.email?.message === "string" && (
                    <p className="text-palette-red text-sm">{errors.email.message}</p>
                  )}
                </div>
              </Field>

              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  {...register("message", { required: "Message is required" })}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                <div className="min-h-5">
                  {typeof errors.message?.message === "string" && (
                    <p className="text-palette-red text-sm">{errors.message.message}</p>
                  )}
                </div>
              </Field>

              <Field>
                <div className="flex justify-center">
                  <HCaptcha
                    ref={captchaRef}
                    sitekey={CONFIG.HCAPTCHA_SITE_KEY}
                    reCaptchaCompat={false}
                    onVerify={handleHCaptchaChange}
                    theme={actual}
                  />
                </div>
              </Field>

              <Field>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </form>
      )}

      {isSubmitSuccessful && isSuccess && (
        <div className="bg-palette-green/10 flex w-full max-w-md flex-col items-center justify-center gap-4 rounded-md p-6 text-center">
          <CircleCheckIcon className="text-palette-green size-12" />
          <h3 className="text-palette-green text-xl font-semibold">Success</h3>
          <p>{result}</p>
        </div>
      )}

      {isSubmitSuccessful && !isSuccess && (
        <div className="bg-palette-red/10 flex w-full max-w-md flex-col items-center justify-center gap-4 rounded-md p-6 text-center">
          <CircleAlertIcon className="text-palette-red size-12" />
          <h3 className="text-palette-red text-xl font-semibold">Uh oh</h3>
          <p>{result}</p>
          <Button
            variant="default"
            className="mt-4"
            onClick={() => {
              reset(undefined, { keepValues: true });
              setIsSuccess(false);
              setResult("");
              captchaRef.current?.resetCaptcha();
            }}
          >
            Try again
          </Button>
        </div>
      )}
    </>
  );
}

export function ContactPage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 p-4">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="text-muted-foreground">Reach out by submitting this form</p>
      </div>
      <Card className="w-full max-w-md p-4">
        <ContactForm />
      </Card>
    </div>
  );
}
