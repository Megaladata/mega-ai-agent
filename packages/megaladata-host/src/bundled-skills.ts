// Host owns the installed-skill contract; the Node-compatible implementation is
// also staged with the runtime so classic/diagnostic bridges cannot weaken it.
import { verifyBundledSkills } from "../../megaladata-runtime/client/lib/bundled-skill-manifest.mjs"
import { reservedSkillNames } from "@mega-ai-agent/product/skills"

export { verifyBundledSkills }

export async function verifyProductSkills(resources: string) {
  const skills = await verifyBundledSkills(resources)
  if (reservedSkillNames.some((name) => !skills.some((skill) => skill.name === name)))
    throw Error("MEGALADATA_PRODUCT_SKILLS_INCOMPLETE")
  return skills
}
